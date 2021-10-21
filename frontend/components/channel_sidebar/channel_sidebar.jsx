import React from 'react';
import { Link } from 'react-router-dom';

class ChannelSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showC: false,
            cContextMenuShow: false,
            picked_channel_id: ""
        }
        this.fetchServerChannels = this.fetchServerChannels.bind(this)
        this.renderContextMenu = this.renderContextMenu.bind(this)
        this.handleContextMenu = this.handleContextMenu.bind(this)
    }

    componentDidMount() {
        this.props.requestCurrentUserServers()
        this.props.fetchServerChannels(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchServerChannels(this.props.match.params.id)
        }
    }

//Fetches the channel list and associated functions with channels
    fetchServerChannels() {

        return this.props.serverChannels.map(channel =>
            <ul key={channel.id}>
                <div className="channel-listing-wrapper">
                    <div className="channel-box">
                        <Link to={`/servers/${this.props.match.params.id}/channels/${channel.id}`}><li className="channel-listing" id = {channel.id} tabIndex="1" ># {channel.channelname}</li></Link>
                        {/* {this.renderDelete(channel)} */}
                    </div>
                </div>
            </ul>


        )
    }

    renderChannelName(){
        
        let id = parseInt(this.props.match.params.id)
        return(
            <div className="channel-title-container">
                <div className="title-box">
                    {/* {FLAG HERE} */}
                    {/* <h3 className="channel-title">{this.props.servers[id].servername}</h3> */}
                    <h3 className="channel-title">{this.props.servers[id]?.servername}</h3>
                </div>
            </div>
        )
    }


//handles and renders the context menu and functions within the menu 

    handleContextMenu(e) {
        document.addEventListener("contextmenu", (e) => {
            if (e.target.className === "channel-listing") {
                e.preventDefault();
                const clickX = e.clientX;
                const clickY = e.clientY;
                this.setState({
                    cContextMenuShow: true,
                    x: clickX,
                    y: clickY,
                    picked_channel_id: e.target.id
                })
            }
        });
        document.addEventListener("click", (e) => {
            if (this.state.cContextMenuShow === true) {
                e.preventDefault();
                this.setState({
                    cContextMenuShow: false,
                    x: 0,
                    y: 0
                });
            }
        });

    };


    renderContextMenu() {
        if (this.state.cContextMenuShow === true) {
            var contextStyle = {
                'top': `${this.state.y}px`,
                'left': `${this.state.x}px`
            }
            return (
                <div className="server-context" style={contextStyle}>
                    <div className="copy-inv">
                        <span onClick={this.props.showCModal}>Add Channel</span>
                    </div>
                    <div className="leave-del">
                        <span onClick={()=>this.props.deleteChannel(this.state.picked_channel_id, this.props.match.params.id )}>Delete Channel</span>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
    

    // renderAddChannel() {
    //     let id = parseInt(this.props.match.params.id)
    //     {/* {FLAG HERE} */ }
    //     // if(this.props.user_id===this.props.servers[id].owner_id){
    //     if (this.props.user_id === this.props.servers[id]?.owner_id) {
    //         return (
    //             <button onClick={e => this.props.showCModal()} >+</button>

    //         )
    //     }
    // }

    // renderDelete(data) {
    //     let id = parseInt(this.props.match.params.id)
    //     {/* {FLAG HERE} */ }
    //     if (this.props.user_id === this.props.servers[id]?.owner_id) {
    //         return (
    //             <button onClick={e => this.props.deleteChannel(data.id, data.hostserver_id)}>Del</button>

    //         )
    //     }
    // }




    render() {
        if(this.props.servers.length < 1){
            return null
        }
        
        return (
            <div className="channel-sidebar-container">
                <div className="channel-sidebar-nav">
                    {this.renderChannelName()}
                    <div className = "channel-list">
                        <span className="ch-header">TEXT CHANNELS </span><span className="ch-plus" onClick={e => this.props.showCModal()}>+</span>
                        {this.fetchServerChannels()}
                        {this.handleContextMenu()}
                        {this.renderContextMenu()}
                    </div>
                    <div className="personal-tab">
                        <div className= "profile-pic"></div>
                        <div className="nametag-box">
                            <div className="userbox">
                            <div className="nametag">{this.props.username}</div>
                            </div>
                            <div className="numbertag"># {this.props.user_id}</div>
                            <button onClick={this.props.logout} >Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ChannelSidebar;