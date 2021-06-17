import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NewServerModal from './newServerModal'


class ServerSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

      
    }

    componentDidMount() {
        this.props.requestCurrentUserServers(this.props.user_id)
    };

    showModal(e){
        this.setState({show: !this.state.show})
    };

    hideModal(e) {
        this.setState({ show: false })
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
                <button className="add_server_btn" onClick={e => this.showModal()} >+</button>
                <NewServerModal show={this.state.show}  hideModal= {this.hideModal} />
            </div>
        )
    }
};

export default ServerSideBar;