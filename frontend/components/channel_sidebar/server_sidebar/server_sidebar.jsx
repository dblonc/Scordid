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
    }

    componentDidMount() {
        this.props.requestCurrentUserServers(this.props.user_id)
    };

    onDelete(server) {
        
        this.props.deleteServer(server.id)
            .then(this.props.history.push('/servers/'))
    };
    // componentDidUpdate(prevProps) {
    //     
    //     if (prevProps.currentUserServers !== this.props.currentUserServers){
    //         this.setState({
    //             servers: this.props.currentUserServers
    //         })
    //     }
    // }

   fetchCurrentServers(){
       
    //    const serverList = this.props.requestCurrentUserServers(this.props.user_id)
    //    
    //     const servers = this.props.currentUserServers.map(server => server.id)
    //    return(
    //         <>
            
    //             <ul></ul>
    //             {servers}
    //             <p>OMG</p>
    //         </>
            
    //     )

    
    return this.props.currentUserServers.map(server => 

        <ul key = {server.id}>
            <div className="list-icon" >
                    <Link to={`/servers/${server.id}`}><li className="id-list"> {server.id}</li></Link>
                    <button onClick={e => this.onDelete(server)}>Del</button>

            </div>
  
        </ul>
        )
       
   };


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