import React from 'react';
import Members_container from '../members_sidebar/members_container';

class Chatbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: {message:""},
            mContextMenuShow: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fetchOldChannelComments = this.fetchOldChannelComments.bind(this)
        this.subscribeUser = this.subscribeUser.bind(this)
        this.receiveReply = this.receiveReply.bind(this)
        this.receiveCommentUser = this.receiveCommentUser.bind(this)
        this.receiveDate = this.receiveDate.bind(this)
        this.fetchChannelName = this.fetchChannelName.bind(this)
        this.renderContextMenu = this.renderContextMenu.bind(this)
        this.handleContextMenu = this.handleContextMenu.bind(this)
        this.messageEnd = React.createRef();
    }

    componentDidMount() {
        const channel_id = parseInt(this.props.match.params.channel_id)
        const server_id = parseInt(this.props.match.params.id)
        this.props.fetchChannelComments(server_id, channel_id)
        this.props.requestCurrentUserServers(this.props.user_id)

        this.subscribeUser()
    }

    componentDidUpdate(prevProps) {
        const channel_id = parseInt(this.props.match.params.channel_id)
        const server_id = parseInt(this.props.match.params.id)

        if (prevProps.match.params.channel_id !== this.props.match.params.channel_id) {
            this.props.fetchChannelComments(server_id, this.props.match.params.channel_id)
            this.subscribeUser()
        }
        if (this.messageEnd.current) {
            this.messageEnd.current.scrollIntoView(false)
        }
    }

//simple handle change for comment box

    handleChange(e){
        this.setState({
            comment: { message: e.target.value },
        })
    }

//a handle submit that calls the Action Cable speak method to broadcast the sent comment to the channel
    handleSubmit(e){
        
        if (e.keyCode === 13) {
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
        
    };
        
    }

//subscribes the user upon a channel click to receive messages
    subscribeUser() {
        const channel_id = this.props.match.params.channel_id
        App.cable.subscriptions.create({ channel: "CommentsChannel" },

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



//fetches all the comments and has specific functions to fetch data associated with comments

    fetchOldChannelComments(){
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

    receiveCommentUser(data) {
        if (this.props.user_id === data.user_id) {
            return this.props.username
        } else {

            return this.props.server.users[data.user_id]?.username

        }
    }

    receiveDate(data) {
        return data.created_at
    }
    
    receiveReply(data){
        
        if(this.props.user_id !== data.comment.user_id){
            this.props.fetchChannelComments(this.props.match.params.id, this.props.match.params.channel_id)
        }
           
    }

   fetchChannelName(){
       if(this.props.channelname === undefined){
           return null
       }else{
           return(
               <div>{this.props.channelname}</div>
           ) 
       }
   }


//handles and renders the context menu 

    handleContextMenu(e) {
        document.addEventListener("contextmenu", (e) => {
            if (e.target.className === "comment-message" || e.target.className === "comment-username" ) {
                e.preventDefault();
                const clickX = e.clientX;
                const clickY = e.clientY;
                this.setState({
                    mContextMenuShow: true,
                    x: clickX,
                    y: clickY
                })
            }
        });
        document.addEventListener("click", (e) => {
            if (this.state.mContextMenuShow === true) {
                e.preventDefault();
                this.setState({
                    mContextMenuShow: false,
                    x: 0,
                    y: 0
                });
            }
        });

    };

    renderContextMenu() {
        if (this.state.mContextMenuShow === true) {
            var contextStyle = {
                'top': `${this.state.y}px`,
                'left': `${this.state.x}px`
                
            }
            return (
                <div className="comment-context" style={contextStyle}>
                    <div >
                        This is a comment context menu
                    </div>
                    <div>
                        This is a comment option 2
                    </div>
                </div>
                // <ServerContextMenu style={contextStyle}/>
            )
        } else {
            return null
        }
    }



    render() {
        return (
            <>
                <div className="chat-window">
                    <div className="channel-title-bar">
                       # {this.fetchChannelName()}
                    </div>
                <div className="messages-portion" >
                    {this.fetchOldChannelComments()} 
                    {this.handleContextMenu()}
                    {this.renderContextMenu()}                   
                        <div ref={this.messageEnd} />
                </div>
                    <div className="chat-area">
                        <input placeholder="Message this channel" id="chat-bar" type="text" className="chat-input" onChange={this.handleChange} onKeyDown={this.handleSubmit}></input>
                        
                    </div>
                </div>
                
                <Members_container />

            </>
        )
    }
};

export default Chatbox;