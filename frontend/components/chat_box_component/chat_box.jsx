import React from 'react';
import { Link } from 'react-router-dom';



class Chatbox extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="chat-window">
                <div className="messages">

                </div>
                <div className="chat-area">
                    <input placeholder="Message this channel" type="text" className = "chat-input" ></input>
                </div>
            </div>
        )
    }
};

export default Chatbox;