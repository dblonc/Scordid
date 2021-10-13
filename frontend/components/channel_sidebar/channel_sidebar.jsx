import React from 'react';
import { Link } from 'react-router-dom';



class ChannelSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showC: false
        }
        this.fetchServerChannels = this.fetchServerChannels.bind(this)
        this.leaveServer = this.leaveServer.bind(this)
        this.renderAddChannel = this.renderAddChannel.bind(this)
        this.renderDelete = this.renderDelete.bind(this)
    }

    renderChannelName(){
        
        let id = parseInt(this.props.match.params.id)
        return(
            <div className="channel-title-container">
                <div className="title-box">
                    <h3 className="channel-title">{this.props.servers[id].servername}</h3>
                </div>
            </div>
        )
    }

    renderAddChannel(){
        let id = parseInt(this.props.match.params.id)

        if(this.props.user_id===this.props.servers[id].owner_id){
            return(
                <button onClick={e => this.props.showCModal()} >+</button>

            )
        }
    }

    renderDelete(data){
        let id = parseInt(this.props.match.params.id)

        if (this.props.user_id === this.props.servers[id].owner_id) {
            return (
                <button onClick={e => this.props.deleteChannel(data.id, data.hostserver_id)}>Del</button>

            )
        }
    }

    fetchServerChannels(){
        
        return this.props.serverChannels.map(channel =>
                <ul key = {channel.id}>
                    <div className="channel-listing-wrapper">
                        <div className="channel-box">
                            <Link to={`/servers/${this.props.match.params.id}/channels/${channel.id}`}><li className="channel-listing"># {channel.channelname}</li></Link>
                            {this.renderDelete(channel)}
                        </div>
                    </div>
                </ul>
                
            
            )
    }

    componentDidMount(){
        // this.props.requestCurrentUserServers(this.props.user_id)
        this.props.fetchServerChannels(this.props.match.params.id)
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.props.fetchServerChannels(this.props.match.params.id)
        }
    }

    leaveServer(e){
        
        e.preventDefault();
        this.props.leaveServer({server_id: this.props.match.params.id}).then(()=>{
            this.props.requestCurrentUserServers();
            this.props.history.push('/servers/')
        })
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
                        {/* <div className="channel-box">
                            <span className="channel-listing"># channel no 1</span>
                        </div>
                        <div className="channel-box">
                            <span className="channel-listing"># channel no 2</span>
                        </div>
                        <div className="channel-box">
                            <span className="channel-listing"># channel no 3</span>
                        </div> */}
                        {this.fetchServerChannels()}
                        {this.renderAddChannel()}
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