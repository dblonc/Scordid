import React from 'react';

class MembersSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.fetchServerMembers = this.fetchServerMembers.bind(this)
    }

    fetchServerMembers(){
        
        return this.props.serverMembers.map(user=>
            <ul key = {user.id}>
                <div className="member-name">                    
                    <span className="member-listing">  {user.username}</span>
                </div>
                
            </ul>
            
            
            )
    }
  
    render() {
        return (
            <div className="member-sidebar-nav">
                {/* <h2 className="mod-title">Mod - 1</h2>
                <div className = "member-name">
                    <span className="member-listing"># member no 1</span>
                </div> */}
               <h2 className="group-title">Members</h2>
                
                    {/* <span className="member-listing"># member no 2</span> */}
                    {this.fetchServerMembers()}
            </div>
        )
    }

};

export default MembersSidebar;