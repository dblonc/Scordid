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
    }

    handleChange(e){
        
        this.setState({
            comment: { message: e.target.value }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        
        const channel_id = this.props.match.params.channel_id 
        const server_id = this.props.match.params.id
        this.props.createComment(server_id, channel_id, this.state.comment)
        
    }

    render() {
        return (
            <div className="chat-window">
                <div className="messages">

                </div>
                <div className="chat-area">
                    <input placeholder="Message this channel" type="text" className = "chat-input" onChange={this.handleChange}></input>
                    <button onClick={this.handleSubmit}>Send</button>
                </div>
            </div>
        )
    }
};

export default Chatbox;