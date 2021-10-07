import React from 'react';
import Members_container from '../members_sidebar/members_container';


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
        this.receiveCommentUser = this.receiveCommentUser.bind(this)
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

    receiveCommentUser(data){
        
        if(this.props.user_id === data.user_id){
            return this.props.username
        }else{
            return this.props.server[data.user_id].username
        
        }
    }

    fetchChannelComments(){
        if(this.props.comments.length === 0){
            return null
        }else{
        return this.props.comments.map(comment =>
            <ul key = {comment.id}>
                <h2 className = "chat-comments">
                    <div className="comment-username">
                        {this.receiveCommentUser(comment)}: 
                    </div>
                    <div className="comment-message">
                        {comment.message}
                    </div>
                </h2>
            </ul>
            )
        }
    };
    

    subscribeUser(){
        const channel_id = this.props.match.params.channel_id
        App.cable.subscriptions.create({ channel: "CommentsChannel"},

            {
                received: data => {
                    this.receiveReply(data)

                },

                speak: function (data) {
                    return this.perform("speak", data)
                }
            }

        )
        
    }
    
    receiveReply(data){
        if(this.props.user_id !== data.comment.user_id){
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
        
        const channel_id = parseInt(this.props.match.params.channel_id)
        const server_id = parseInt(this.props.match.params.id)

        if(prevProps.match.params.channel_id !== this.props.match.params.channel_id){
            this.props.fetchChannelComments(server_id, this.props.match.params.channel_id)
            this.subscribeUser()
        }
    }


    render() {
        return (
            <>
                <div className="chat-window">
                    <div className="channel-title-bar">
                       # {this.props.channelname}
                    </div>
                    
                    {this.fetchChannelComments()}                    
                    
                    
                    <div className="chat-area">
                        <input placeholder="Message this channel" id="chat-bar" type="text" className="chat-input" onChange={this.handleChange}></input><button onClick={this.handleSubmit}>Send</button>
                        
                    </div>
                </div>
                <Members_container />

            </>
        )
    }
};

export default Chatbox;