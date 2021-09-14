import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ChannelSidebar from '../channel_sidebar/channel_sidebar_container';
import Chatbox from '../chat_box_component/chat_box';
import MembersSidebar from '../members_sidebar/members_sidebar';
import ServerSideBar from '../channel_sidebar/server_sidebar/server_sidebar'
import NewServerModal from '../channel_sidebar/server_sidebar/newServerModal'
import ServerModalContainer from '../channel_sidebar/server_sidebar/serverModalContainer';
import ServerSidebarContainer from '../channel_sidebar/server_sidebar/serverSidebarContainer'
import Channel_sidebar_container from '../channel_sidebar/channel_sidebar_container'
import Channel_modal_container from '../channel_sidebar/channel_modal_container'
import Chat_box_container from '../chat_box_component/chat_box_container';

class Servers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            showC: false,
            phasestate: 1
        };

        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.showCModal = this.showCModal.bind(this);
        this.hideCModal = this.hideCModal.bind(this)
    }

    showModal(e) {
        this.setState({ show: !this.state.show })
    };

    showCModal(e) {
        this.setState({ showC: !this.state.showC })
    };

    hideModal(e) {
        this.setState(
            { show: false}
            )
    };

    hideCModal(e) {
        this.setState(
            { showC: false}
            )
    };

 

render() {

        return(
            <div className="main-window">
                    {/* <NewServerModal show={this.state.show} hideModal={this.hideModal} /> */}
                    <ServerModalContainer show={this.state.show} hideModal={this.hideModal} />

                <div className = "server-window">
                    <ServerSidebarContainer showModal={this.showModal}
                        show={this.state.show} />

                    {/* <Channel_sidebar_container />
                    <Chatbox/>
                    
                    <MembersSidebar/> */}
                    
                    <Switch>
                        <Route path = '/servers/:id' render = {(props) =>
                            <>
                                <Channel_modal_container showC={this.state.showC} hideCModal={this.hideCModal} />
                                {/* <Route path = "/servers/:id/" component = {Channel_sidebar_container} */}
                                <Channel_sidebar_container showC={this.state.showC} showCModal={this.showCModal} hideCModal={this.hideCModal}/>
                                <MembersSidebar/>

                                <Route path = "/servers/:id/channels/:channel_id">
                                    <Chat_box_container/>
                                </Route>

                            </>}>

                        </Route>
                    </Switch>

                    
                </div>
            </div>
        )
    }
};

export default Servers;