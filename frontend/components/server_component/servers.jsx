import React from 'react';
import { Link } from 'react-router-dom';
import ChannelSidebar from '../channel_sidebar/channel_sidebar_container';
import Chatbox from '../chat_box_component/chat_box';
import MembersSidebar from '../members_sidebar/members_sidebar';
import ServerSideBar from '../channel_sidebar/server_sidebar/server_sidebar'
import NewServerModal from '../channel_sidebar/server_sidebar/newServerModal'





class Servers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);



    }

    showModal(e) {
        this.setState({ show: !this.state.show })
    };

    hideModal(e) {
        this.setState({ show: false })
    };




render() {
     

        return(
            <div className="main-window">

                <div className = "server-window">
                    <NewServerModal show={this.state.show} hideModal={this.hideModal} />

                    <ServerSideBar  
                        requestCurrentUserServers={this.props.requestCurrentUserServers}
                        user_id={this.props.user_id}
                        currentUserServers = {this.props.currentUserServers}
                        showModal={this.showModal}
                        show = {this.state.show}
                    />
                    <ChannelSidebar />
                    <Chatbox/>
                    
                    <MembersSidebar/>
                    
                </div>
            </div>
        )
    }
};

export default Servers;