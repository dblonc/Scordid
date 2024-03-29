import React from 'react';
import { render } from 'react-dom';
import {withRouter} from 'react-router-dom';
import {channelCreation} from '../channel_modal'

class NewServerModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state ={
            phasestate: 1,
            servername: "",
            description: "Insert Description Here",
            owner_id: "",
            private_server: false,
            inviteCode: ""
        }
        
        this.hideModal = this.hideModal.bind(this);
        this.modalbackward = this.modalbackward.bind(this);
        this.modalforward = this.modalforward.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.serverCreation = this.serverCreation.bind(this);
        this.modalJoin = this.modalJoin.bind(this)
        this.handleJoin = this.handleJoin.bind(this)
        this.updateCode = this.updateCode.bind(this)
    }

    // Modal Settings
    modalforward(){
        this.setState({
            phasestate: this.state.phasestate + 1
        })
    };

    modalbackward(){
        this.setState({
            phasestate: this.state.phasestate - 1
        })
    };

    modalJoin(){
        this.setState({
            phasestate: 4
        })
    }

    handlechange(e){
        this.setState({
            servername: e.target.value
        })
    }

    hideModal(e){
        this.props.hideModal && this.props.hideModal(e);
        this.setState({
            phasestate: 1
        })
    };

    handleJoin(e){
        e.preventDefault();
        let cInput = this.state.inviteCode;
        let tempinviteCode = parseInt(cInput)
      
        this.props.joinServer({inviteCode: tempinviteCode}).then((action)=>{
            this.props.hideModal();
            this.props.requestCurrentUserServers();
        })
        this.setState({
            phasestate: 1
        })
    }

    updateCode(e){
        e.preventDefault();
        this.setState({
            inviteCode: e.target.value
        })
    }

  // Make a new server within the modal

    serverCreation(e){
        
        e.preventDefault();
        const server = Object.assign({}, this.state)
        this.props.createServer(server).then( (res) =>{
            const id = parseInt( Object.keys(res.currentServer.server)[0])
            this.props.history.push(`/servers/${id}`)
        }
        )
        .then(this.hideModal())
    }


    render() { 
        
        if(!this.props.show){
            return null;
        }



        const firstphase = (
            <>
                <div className="modal-top-create">
                    <h3>Create a server</h3>
                </div>
                <div className="modal-top-server">
                    <p>Your server is where you and your friends hang out. Make
                        <br />
                        yours and start talking.
                    </p>
                </div>
                <div className="modal-create-buttons">
                    <button className="my-own" onClick={this.modalforward}>Create my Own</button>
                </div>
                <div className="modal-join-section">
                    <h3 className="inv-text">Have an Invite Already?</h3>
                    <button className="join-server-btn" onClick={this.modalJoin}>Join Server</button>

                </div>
            </>

        )



        const secondphase = (
            <>
                <div className="modal-top-create">
                    <h3>Tell us more about your server</h3>
                </div>
                <div className="modal-top-server">
                    <p>In order to help you with your setup, is your new server for
                        <br />
                        just a few friends or a larger community?
                    </p>
                </div>
                <div className="modal-create-buttons">
                    <button className="for-buttons" onClick={this.modalforward}>For me and my friends</button>
                    <button className="for-buttons" onClick={this.modalforward}>For a club or community</button>
                </div>

                <div className="not-sure">
                    <p>Not sure? You can skip this question for now.</p>
                </div>
                <div className="back-and-create">
                    <button className="back-button" onClick={this.modalbackward}>Back</button>
                </div>                
            </>
        )

        const thirdphase = (
            <>
                <div className="modal-top-create">
                    <h3>Customize your server</h3>
                </div>
                <div className="modal-top-server">
                    <p>Give your new server a personality with a name and an
                        <br />
                        icon. You can always change it later
                    </p>
                </div>
                <div className="server-input">
                   <form action="server-form" onSubmit={this.serverCreation}>
                        <div className = "photo-upload">

                        </div>

                        <div className = "server-textbox-section">
                            <div className="server-input-title">
                                <h5>SERVER NAME</h5>
                            </div>

                            <div className = "server-textbox">
                                <input type="text" className="server-modal-textbox" onChange={this.handlechange} value={this.state.servername}/>
                            </div>

                            <div className = "community-guidelines">
                                By creating a server, you agree to Scordid's Community Guidelines.
                            </div>

                    <div className="back-and-create">
                        <div className="create-back-button" onClick={this.modalbackward}>
                        Back
                        </div>
                                <button className="server-create" type='submit' >Create</button>
                    </div>
                            

                        </div>
                   </form>
                </div>
            </>
        )
        
        const fourthphase = (
            <>
                <div>
                    <h3>Join a Server</h3>
                </div>
                <div>
                    <p>Enter an invite code below to join a server</p>
                </div>
                <div>
                    <div>
                        <h5>INVITE CODE</h5>
                    </div>
                    <div>
                        <input type="text" onChange={this.updateCode}/>
                    </div>
                    <div>
                        <button onClick={()=>this.setState({phasestate: 1})}>back</button>
                        <br />
                        <button onClick={this.handleJoin} type='submit'>Submit</button>
                    </div>
                </div>
            </>
                    )

        const modalswitch = () => {
           
            if (this.state.phasestate === 1) {
                 return firstphase ;
            } else if (this.state.phasestate === 2) {
                 return secondphase ;
            } else if (this.state.phasestate=== 3){
                 return thirdphase ;
            } else {
                return fourthphase
            }
        };


        
        return(
            <div className = "modal-spacer">
                <div className = "modal-background" onClick = {this.hideModal}></div>

                <div className="server-modal-wrapper">
                    <div className="modal-top">
                        <div className="modal-top-text">

                            {modalswitch()}
                            <button className = "modal-x" onClick={e => this.hideModal(e)}>
                            X
                            </button>
                        </div>
                        
                        
                    </div>

                   
                </div>
            </div>
        )

    }
    
}



export default withRouter(NewServerModal);