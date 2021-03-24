import React from 'react';
import { Link } from 'react-router-dom';



class ChannelSidebar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="channel-sidebar-nav">
                <h3 className="channel-title">Channel Name</h3>
                <span className="channel-listing"># channel no 1</span>
                <br />
                <span className="channel-listing"># channel no 2</span>
            </div>
        )
    }
};

export default ChannelSidebar;