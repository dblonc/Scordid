import React from 'react';
import { Link } from 'react-router-dom';

class ChannelSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showC: false,
            cContextMenuShow: false
        }
        this.fetchServerChannels = this.fetchServerChannels.bind(this)
        this.leaveServer = this.leaveServer.bind(this)
        this.renderAddChannel = this.renderAddChannel.bind(this)
        this.renderDelete = this.renderDelete.bind(this)
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
                        <Link to={`/servers/${this.props.match.params.id}/channels/${channel.id}`}><li className="channel-listing"># {channel.channelname}</li></Link>
                        {this.renderDelete(channel)}
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

    renderAddChannel(){
        let id = parseInt(this.props.match.params.id)
        {/* {FLAG HERE} */ }
        // if(this.props.user_id===this.props.servers[id].owner_id){
        if(this.props.user_id===this.props.servers[id]?.owner_id){
            return(
                <button onClick={e => this.props.showCModal()} >+</button>

            )
        }
    }

    renderDelete(data){
        let id = parseInt(this.props.match.params.id)
        {/* {FLAG HERE} */ }
        if (this.props.user_id === this.props.servers[id]?.owner_id) {
            return (
                <button onClick={e => this.props.deleteChannel(data.id, data.hostserver_id)}>Del</button>

            )
        }
    }

    leaveServer(e){
        
        e.preventDefault();
        this.props.leaveServer({server_id: this.props.match.params.id}).then(()=>{
            this.props.requestCurrentUserServers();
            this.props.history.push('/servers/')
        })
    }


//handles and renders the context menu 

    handleContextMenu(e) {
        document.addEventListener("contextmenu", (e) => {
            if (e.target.className === "channel-listing") {
                e.preventDefault();
                const clickX = e.clientX;
                const clickY = e.clientY;
                this.setState({
                    cContextMenuShow: true,
                    x: clickX,
                    y: clickY
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
                'position': 'absolute',
                'top': `${this.state.y}px`,
                'left': `${this.state.x}px`,
                'backgroundColor': 'black',
                'color': 'white',
                'zIndex': '9999'
            }
            return (
                <div className="server-context" style={contextStyle}>
                    <div>
                        This is a channel context menu
                    </div>
                    <div>
                        This is a channel option 2
                    </div>
                </div>
                // <ServerContextMenu style={contextStyle}/>
            )
        } else {
            return null
        }
    }




    render() {
        if(this.props.servers.length < 1){
            return null
        }
        
        return (
            <div className="channel-sidebar-container">
                <div className="channel-sidebar-nav">
                    {this.renderChannelName()}
                    <div className = "channel-list">
                        {this.fetchServerChannels()}
                        {this.renderAddChannel()}
                        {this.handleContextMenu()}
                        {this.renderContextMenu()}
                        <button onClick={this.leaveServer}>Leave</button>
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