import React from 'react';
import { Link } from 'react-router-dom';



class ChannelSidebar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="channel-sidebar-nav">
                <div className = "title-box">
                    <h3 className="channel-title">Channel Name</h3>
                </div>
                <div className = "channel-list">
                    <div className="channel-box">
                        <span className="channel-listing"># channel no 1</span>
                    </div>
                    <div className="channel-box">
                        <span className="channel-listing"># channel no 2</span>
                    </div>
                    <div className="channel-box">
                        <span className="channel-listing"># channel no 3</span>
                    </div>
                </div>
                <div className="personal-tab">
                    <div className= "profile-pic"></div>
                    <div className="nametag-box">
                        <div className="userbox">
                        <div className="nametag">Dannybee</div>
                        </div>
                        <div className="numbertag">#0320</div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ChannelSidebar;