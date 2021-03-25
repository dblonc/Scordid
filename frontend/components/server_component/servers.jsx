import React from 'react';
import { Link } from 'react-router-dom';
import ChannelSidebar from '../channel_sidebar/channel_sidebar';
import Chatbox from '../chat_box_component/chat_box';
import MembersSidebar from '../members_sidebar/members_sidebar';
import ServerSideBar from '../channel_sidebar/server_sidebar/server_sidebar'




class Servers extends React.Component {
    constructor(props) {
        super(props);
    }


render() {
        return(
            <div className = "server-window">
            
               <ServerSideBar />
               <ChannelSidebar/>
               <Chatbox/>
               <MembersSidebar/>
            </div>
        )
    }
};

export default Servers;