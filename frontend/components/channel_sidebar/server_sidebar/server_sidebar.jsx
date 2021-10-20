import React from 'react';
import { Link } from 'react-router-dom';
import ServerContextMenu from '../../context_menu_components/server_context_menu';

class ServerSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            servers: [],
            contextMenuShow: false,
            x: 0,
            y: 0,
            serverPick: {id:"", owner_id: "", invite_code: "" }
        }


        this.fetchCurrentServers = this.fetchCurrentServers.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.serverClick = this.serverClick.bind(this)
        this.handleContextMenu = this.handleContextMenu.bind(this)
        this.renderContextMenu = this.renderContextMenu.bind(this)
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
                    y: clickY
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
                'position': 'absolute',
                'top': `${this.state.y}px`,
                'left': `${this.state.x}px`,
                'backgroundColor': 'black',
                'color': 'white',
                'zIndex': '9999'
            }
            return(
                <div className = "server-context" style = {contextStyle}>
                    <div>
                        This is a context menu
                    </div>
                    <div>
                        This is option 2
                    </div>
                </div>
                // <ServerContextMenu style={contextStyle}/>
            )
        }else{
            return null
        }
    }


//handles delete functionality

    onDelete(server) {
        
        this.props.deleteServer(server.id)
            .then(this.props.history.push('/servers/'))
    };


    renderDelete(data){
        if(this.props.user_id===data.owner_id){
            return(
            <button onClick={e => this.onDelete(data)}>Del</button>
            )
        }else{
            return null
        }
    }


//renders the server list

    fetchCurrentServers(){
        
    return this.props.currentUserServers.map(server =>         
        <ul key = {server.id}>
            <div className="list-icon" >
                    <li className="id-list" id="server-btn" onClick={()=>this.serverClick(server)}> {server.id}</li>
                    {this.renderDelete(server)}
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