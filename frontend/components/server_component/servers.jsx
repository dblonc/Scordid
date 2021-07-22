import React from 'react';
import { Link } from 'react-router-dom';
import ChannelSidebar from '../channel_sidebar/channel_sidebar_container';
import Chatbox from '../chat_box_component/chat_box';
import MembersSidebar from '../members_sidebar/members_sidebar';
import ServerSideBar from '../channel_sidebar/server_sidebar/server_sidebar'
import NewServerModal from '../channel_sidebar/server_sidebar/newServerModal'
import ServerModalContainer from '../channel_sidebar/server_sidebar/serverModalContainer';
import ServerSidebarContainer from '../channel_sidebar/server_sidebar/serverSidebarContainer'
import Channel_sidebar_container from '../channel_sidebar/channel_sidebar_container'




class Servers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            phasestate: 1
        };
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
     


    }

    showModal(e) {
        this.setState({ show: !this.state.show })
    };

    hideModal(e) {
        this.setState(
            { show: false}
            )
    };


render() {
     

        return(
            <div className="main-window">
                    {/* <NewServerModal show={this.state.show} hideModal={this.hideModal} /> */}
                    <ServerModalContainer show={this.state.show} hideModal={this.hideModal} />
                    {/* <ServerModalContainer /> */}

                <div className = "server-window">

                    {/* <ServerSideBar  
                        requestCurrentUserServers={this.props.requestCurrentUserServers}
                        user_id={this.props.user_id}
                        currentUserServers = {this.props.currentUserServers}
                        showModal={this.showModal}
                        show = {this.state.show}
                    /> */}
                    <ServerSidebarContainer showModal={this.showModal}
                        show={this.state.show} />
                    <Channel_sidebar_container />
                    <Chatbox/>
                    
                    <MembersSidebar/>
                    
                </div>
            </div>
        )
    }
};

export default Servers;