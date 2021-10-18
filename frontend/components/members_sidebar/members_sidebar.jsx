import React from 'react';

class MembersSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            memberLength: this.props.serverMembers.length
        }
        this.fetchServerMembers = this.fetchServerMembers.bind(this)
    }

    fetchServerMembers(){
        return this.props.serverMembers.map( user =>
            <ul key = {user.id}>
                <div className="member-name">                    
                    <span className="member-listing">  {user.username}</span>
                </div>
                
            </ul>
            
            
            )
    }

    componentDidUpdate(prevProps, prevState){
        debugger
        if (prevState.memberLength.length !== this.state.memberLength){
            this.fetchServerMembers()
        }
    }
  
    render() {
        return (
            <div className="member-sidebar-nav">
               <h2 className="group-title">Members - {this.props.serverMembers.length}</h2>
                {this.fetchServerMembers()}
            </div>
        )
    }

};

export default MembersSidebar;