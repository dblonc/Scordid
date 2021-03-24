import React from 'react';
import { Link } from 'react-router-dom';



class MembersSidebar extends React.Component {
    constructor(props) {
        super(props);
    }


  

    render() {
        return (
            <div className="member-sidebar-nav">
                <span className="member-listing"># member no 1</span>
                <br/>
                <span className="member-listing"># member no 2</span>
            </div>
        )
    }

};

export default MembersSidebar;