import React from 'react';
import { Link } from 'react-router-dom';

class ServerSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            servers: [],
            contextMenuShow: false,
            x: 0,
            y: 0,
            picked_id: "",
            picked_owner_id: "", 
            picked_invite_code: "" 
        }


        this.fetchCurrentServers = this.fetchCurrentServers.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.serverClick = this.serverClick.bind(this)
        this.handleContextMenu = this.handleContextMenu.bind(this)
        this.renderContextMenu = this.renderContextMenu.bind(this)
        // this.leaveServer = this.leaveServer.bind(this)
        this.renderLeaveorDelete = this.renderLeaveorDelete.bind(this)
    }

    componentDidMount() {
        // this.props.requestCurrentUserServers(this.props.user_id)
        this.handleContextMenu();
    };


//handles and renders the context menu 

    handleContextMenu(e){
       document.addEventListener("contextmenu",  (e) => {
            if(e.target.className === "id-list"){
                e.preventDefault();
                const clickX = e.clientX;
                const clickY = e.clientY;
                this.setState({
                    contextMenuShow: true,
                    x: clickX,
                    y: clickY,
                    picked_id: e.target.id, 
                    picked_owner_id: this.props.servers[e.target.id].owner_id, 
                    picked_invite_code: this.props.servers[e.target.id].invite_code
                })
        }});
            document.addEventListener("click",  (e) => {
                if(this.state.contextMenuShow === true){
                e.preventDefault();
                this.setState({ 
                    contextMenuShow: false, 
                    x: 0, 
                    y: 0 
                });
            }
            });
        
    };


    renderContextMenu(){
        if(this.state.contextMenuShow===true){
            var contextStyle ={
                'top': `${this.state.y}px`,
                'left': `${this.state.x}px`
            }
            return(
                <div className = "server-context" style = {contextStyle}>
                {/* // <div className = "server-context" style ={{top:`${this.state.y}px`}}> */}
                    <div className = "copy-inv">
                        <span onClick={()=>navigator.clipboard.writeText(this.state.picked_invite_code)}>Copy Invite Code</span>
                    </div>
                    <div className = "leave-del">
                        {this.renderLeaveorDelete()}
                    </div>
                </div>
            )
        }else{
            return null
        }
    }


//functions listed in the context menu

    renderLeaveorDelete(){
        
        if(this.state.picked_owner_id === this.props.user_id){
            return(
                <span onClick={this.onDelete}>Delete Server</span>
            )
        }else{
            return(
                <span onClick={this.leaveServer}>Leave Server</span>
            )
        }
    }

    onDelete() { 
        this.props.deleteServer(this.state.picked_id)
            .then(this.props.history.push('/servers/'))
    };


    // renderDelete(data){
    //     if(this.props.user_id===data.owner_id){
    //         return(
    //         <button onClick={e => this.onDelete(data)}>Del</button>
    //         )
    //     }else{
    //         return null
    //     }
    // }

    // leaveServer(e) {
        
    //     e.preventDefault();
    //     this.props.leaveServer({server_id: this.state.picked_id}).then(() => {
    //         this.props.requestCurrentUserServers();
    //         this.props.history.push('/servers/')
    //     })
    // }


//renders the server list

    fetchCurrentServers(){
        
    return this.props.currentUserServers.map(server =>         
        <ul key = {server.id}>
            <div className="list-icon" >
                    <li className="id-list" id={server.id} onClick={()=>this.serverClick(server)}> {server.id}</li>
            </div>
  
        </ul>
        )
       
   };

    
    
//paths each server button to the first channel of the server

    serverClick(server) {
        this.props.fetchServerChannels(server.id).then(this.props.fetchChannelComments(server.id, server.general_id)).then(this.props.history.push(`/servers/${server.id}/channels/${server.general_id}`))
        // this.props.history.push(`/servers/${server.id}/channels/${server.channels[0].id}`)
    }




    render() {
     
        return (
            <div className = "sidebarnav">
                <a href="#/servers/">
                <div className="server-icon-me">
                </div>
                <div className= "separator"></div>
                </a>
                {this.fetchCurrentServers()}
                <button className="add_server_btn" onClick={e => this.props.showModal()} >+</button>
                {this.renderContextMenu()}
                {this.handleContextMenu()}
            </div>
        )
    }
};

export default ServerSideBar;