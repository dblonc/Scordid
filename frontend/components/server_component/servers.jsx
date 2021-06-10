import React from 'react';
import { Link } from 'react-router-dom';
import ChannelSidebar from '../channel_sidebar/channel_sidebar';
import Chatbox from '../chat_box_component/chat_box';
import MembersSidebar from '../members_sidebar/members_sidebar';
import ServerSideBar from '../channel_sidebar/server_sidebar/server_sidebar'
import NewServerModal from '../channel_sidebar/server_sidebar/newServerModal'





class Servers extends React.Component {
    constructor(props) {
        super(props);
    }



render() {
     const [show, setShow] = useState(false) ;

        return(
            <div className="main-window">

                <div className = "server-window">
                    
                    <ServerSideBar  requestCurrentUserServers={this.props.requestCurrentUserServers}
                    user_id={this.props.user_id}
                    currentUserServers = {this.props.currentUserServers}/>
                    <ChannelSidebar/>
                    <Chatbox/>
                    <NewServerModal/>
                    <MembersSidebar/>
                    
                </div>
            </div>
        )
    }
};

export default Servers;