import React from 'react';
import { Link } from 'react-router-dom';



class Chatbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {message:""}
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fetchChannelComments = this.fetchChannelComments.bind(this)
        this.subscribeUser = this.subscribeUser.bind(this)
        this.receiveReply = this.receiveReply.bind(this)
    }

    handleChange(e){
        
        this.setState({
            comment: { message: e.target.value },
        })
    }

    handleSubmit(e){
        e.preventDefault();
        
        const channel_id = parseInt(this.props.match.params.channel_id )
        const server_id = parseInt(this.props.match.params.id)
        this.props.createComment(server_id, channel_id, this.state.comment)
        App.cable.subscriptions.subscriptions[0].speak(

            {user_id: this.props.user_id, 
             channel_id: channel_id, 
             message: this.state.comment.message }
        );

        this.setState({
            comment: ""
        })
        document.getElementById('chat-bar').value = ""

        
        
    }

    fetchChannelComments(){
        return this.props.comments.map(comment =>
            <ul key = {comment.id}>
                <div className = "chat-comments">
                  {this.props.users[0].username}: {comment.message}
                </div>
            </ul>
            )
    }

    subscribeUser(){
        // App.cable.subscriptions.create({ channel: "CommentsChannel", channelId: this.props.match.params.channel_id },
        const channel_id = this.props.match.params.channel_id
        App.cable.subscriptions.create({ channel: "CommentsChannel"},

            {
                received: data => {
                    this.receiveReply(data)
                    // this.props.fetchChannelComments(this.props.match.params.id, this.props.match.params.channel_id)

                },

                speak: function (data) {
                    return this.perform("speak", data)
                }
            }

        )
        
    }
    
    receiveReply(data){
        // debugger
        if(this.props.user_id !== data.comment.user_id){
            // this.props.receiveCurrentComment({comment: data})
            this.props.fetchChannelComments(this.props.match.params.id, this.props.match.params.channel_id)
        }
    }

    componentDidMount(){
        const channel_id = parseInt(this.props.match.params.channel_id)
        const server_id = parseInt(this.props.match.params.id)
        this.props.fetchChannelComments(server_id, channel_id)
        this.subscribeUser()
       
    }

    componentDidUpdate(prevProps){
        debugger
        const channel_id = parseInt(this.props.match.params.channel_id)
        const server_id = parseInt(this.props.match.params.id)

        if(prevProps.match.params.channel_id !== this.props.match.params.channel_id){
            debugger
            this.props.fetchChannelComments(server_id, this.props.match.params.channel_id)
            this.subscribeUser()
        }
        // if(prevProps.comments !== this.props.comments){
        //     this.props.fetchChannelComments(server_id, this.props.match.params.channel_id)

        // }
    }


    render() {
        return (
            <div className="chat-window">
                <div className="messages">
                {this.fetchChannelComments()}
                </div>
                <div className="chat-area">
                    <input placeholder="Message this channel" id="chat-bar" type="text" className = "chat-input" onChange={this.handleChange}></input>
                    <button onClick={this.handleSubmit}>Send</button>
                </div>
                
            </div>
        )
    }
};

export default Chatbox;