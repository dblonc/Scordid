import React, {useState} from 'react';
import { Link } from 'react-router-dom';


class ServerSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            servers: []
        }


        this.fetchCurrentServers = this.fetchCurrentServers.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.serverClick = this.serverClick.bind(this)
    }

    componentDidMount() {
        this.props.requestCurrentUserServers(this.props.user_id)
    };

    onDelete(server) {
        
        this.props.deleteServer(server.id)
            .then(this.props.history.push('/servers/'))
    };


    renderDelete(data){
        if(this.props.user_id===data.owner_id){
            return(
            <button onClick={e => this.onDelete(data)}>Del</button>
            )
        }else{
            return null
        }
    }

    fetchCurrentServers(){
        
    return this.props.currentUserServers.map(server =>         
        <ul key = {server.id}>
            <div className="list-icon" >
                    <Link to={`/servers/${server.id}`}><li className="id-list"> {server.id}</li></Link>
                    {this.renderDelete(server)}
            </div>
  
        </ul>
        )
       
   };

    serverClick() {
        this.props.fetchServerChannels(this.props.match.params.id)
        this.props.history.push(`/servers/${server.id}/channels/${server.channels[0].id}`)
    }


    render() {
     
        return (
            <div className = "sidebarnav">
                <a href="#/servers/">
                <div className="server-icon-me">
                </div>
                <div className= "separator"></div>
                </a>
                {this.fetchCurrentServers()}
                <button className="add_server_btn" onClick={e => this.props.showModal()} >+</button>
            </div>
        )
    }
};

export default ServerSideBar;