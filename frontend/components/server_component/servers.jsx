import React from 'react';
import { Link } from 'react-router-dom';
import ChannelSidebar from '../channel_sidebar/channel_sidebar_container';
import Chatbox from '../chat_box_component/chat_box';
import MembersSidebar from '../members_sidebar/members_sidebar';
import ServerSideBar from '../channel_sidebar/server_sidebar/server_sidebar'
import NewServerModal from '../channel_sidebar/server_sidebar/newServerModal'
import ServerModalContainer from '../channel_sidebar/server_sidebar/serverModalContainer';




class Servers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            phasestate: 1
        };
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.modalbackward = this.modalbackward.bind(this);
        this.modalforward = this.modalforward.bind(this);



    }

    showModal(e) {
        this.setState({ show: !this.state.show })
    };

    hideModal(e) {
        this.setState({ show: false })
    };

    modalforward() {
        this.setState({
            phasestate: phasestate + 1
        })
    };

    modalbackward() {
        this.setState({
            phasestate: phasestate - 1
        })
    };




render() {
     

        return(
            <div className="main-window">
                    {/* <NewServerModal show={this.state.show} hideModal={this.hideModal} /> */}
                    <ServerModalContainer show={this.state.show} hideModal={this.hideModal} />
                    {/* <ServerModalContainer /> */}

                <div className = "server-window">

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