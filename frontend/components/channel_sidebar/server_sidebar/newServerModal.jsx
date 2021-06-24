import React from 'react';
import { render } from 'react-dom';

class NewServerModal extends React.Component {
    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);

    }

   

    hideModal(e){
        this.props.hideModal && this.props.hideModal(e);
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
                    <button className="my-own">Create my Own</button>
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
                    <button className="for-buttons">For me and my friends</button>
                    <button className="for-buttons">For a club or community</button>
                </div>

                <div className="not-sure">
                    <p>Not sure? You can skip this question for now.</p>
                </div>
                <div className="back-and-create">
                    <button className="back-button">Back</button>
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
                   <form action="server-form">
                        <div className = "photo-upload">

                        </div>

                        <div className = "server-textbox-section">
                            <div className="server-input-title">
                                <h5>SERVER NAME</h5>
                            </div>

                            <div className = "server-textbox">
                                <input type="text" className="server-modal-textbox"/>
                            </div>

                            <div className = "community-guidelines">
                                By creating a server, you agree to Scordid's Community Guidelines.
                            </div>

                            

                        </div>
                   </form>
                    <div className="back-and-create">
                        <div className="create-back-button">
                        Back
                        </div>
                        <button className="server-create">Create</button>
                    </div>
                </div>
            </>
        )
        return(
            <div>
                <div className = "modal-background" onClick = {this.hideModal}></div>

                <div className="server-modal-wrapper">
                    <div className="modal-top">
                        <div className="modal-top-text">
                            {secondphase}
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



export default NewServerModal;