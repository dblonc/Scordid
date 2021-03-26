import React from 'react';
import { Link } from 'react-router-dom';



class MembersSidebar extends React.Component {
    constructor(props) {
        super(props);
    }


  

    render() {
        return (
            <div className="member-sidebar-nav">
                <h2 className="mod-title">Mod - 1</h2>
                <div className = "member-name">
                    <span className="member-listing"># member no 1</span>
                </div>
               <h2 className="group-title">Online - 1</h2>
                <div className="member-name">
                    <span className="member-listing"># member no 2</span>
                </div>
            </div>
        )
    }

};

export default MembersSidebar;