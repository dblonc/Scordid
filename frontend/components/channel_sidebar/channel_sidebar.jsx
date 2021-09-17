import React from 'react';
import { Link } from 'react-router-dom';



class ChannelSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showC: false
        }
        this.fetchServerChannels = this.fetchServerChannels.bind(this)
    }

    renderChannelName(){
        
        let id = parseInt(this.props.match.params.id)
        return(
            <div className="title-box">
                <h3 className="channel-title">{this.props.servers[id].servername}</h3>
            </div>
        )
    }

    fetchServerChannels(){
        
        return this.props.serverChannels.map(channel =>
                <ul key = {channel.id}>
                    <div className="channel-box">
                        <Link to={`/servers/${this.props.match.params.id}/channels/${channel.id}`}><li className="channel-listing"># {channel.channelname}</li></Link>
                        <button onClick={e => this.props.deleteChannel(channel.id, channel.hostserver_id)}>Del</button>
                    </div>
                </ul>
                
            
            )
    }

    componentDidMount(){
        
        this.props.fetchServerChannels(this.props.match.params.id)
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.props.fetchServerChannels(this.props.match.params.id)
        }
    }



    render() {
        if(this.props.servers.length < 1){
            return null
        }
        
        return (
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
                    <button onClick={e => this.props.showCModal()} >+</button>
                </div>
                <div className="personal-tab">
                    <div className= "profile-pic"></div>
                    <div className="nametag-box">
                        <div className="userbox">
                        <div className="nametag">Dannybee</div>
                        </div>
                        <div className="numbertag">#0320</div>
                        <button onClick={this.props.logout} >Log Out</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default ChannelSidebar;