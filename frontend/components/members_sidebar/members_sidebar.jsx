import React from 'react';

class MembersSidebar extends React.Component {
    constructor(props) {
        super(props);

       
        this.fetchServerMembers = this.fetchServerMembers.bind(this)
    }

    fetchServerMembers(){
        {/* {FLAG HERE} */ }
        if(!this.props.serverMembers){
            return null
        }else{
        return this.props.serverMembers.map( user =>
            <ul key = {user.id}>
                <div className="member-name">                    
                    <span className="member-listing">  {user.username}</span>
                </div>
                
            </ul>
            
            
            )
        }
    }

   componentDidMount(){
       this.props.requestCurrentUserServers()
       this.props.fetchServerChannels(this.props.match.params.id)
   }
  
    render() {
        return (
            <div className="member-sidebar-nav">
                {/* {FLAG HERE} */}
               <h2 className="group-title">Members - {this.props.serverMembers?.length}</h2>
                {this.fetchServerMembers()}
            </div>
        )
    }

};

export default MembersSidebar;