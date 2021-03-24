import React from 'react';
import { Link } from 'react-router-dom';



class ServerSideBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className = "sidebarnav">
                <a href="#/">
                <div className="server-icon1">
                    
                </div>
                </a>
            </div>
        )
    }
};

export default ServerSideBar;