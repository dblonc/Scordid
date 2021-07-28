import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NewServerModal from './newServerModal'


class ServerSideBar extends React.Component {
    constructor(props) {
        super(props);


   
    }

    componentDidMount() {
        this.props.requestCurrentUserServers(this.props.user_id)
    };

   



    render() {
       
     
        
        return (
            <div className = "sidebarnav">
                <a href="#/@me">
                <div className="server-icon-me">
                </div>
                <div className= "separator"></div>
                </a>
                <a href="#/server1/channel1">
                    <div className="server-icon-1">
                    </div>
                </a>
                <button className="add_server_btn" onClick={e => this.props.showModal()} >+</button>
                <button onClick={e => this.props.deleteServer}>Del</button>
            </div>
        )
    }
};

export default ServerSideBar;