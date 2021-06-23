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
        return(
            <div>
                <div className = "modal-background" onClick = {this.hideModal}></div>

                <div className="server-modal-wrapper">
                    <div className="modal-top">
                        <div className="modal-top-text">
                        {firstphase}
                            <button className = "modal-x" onClick={e => this.hideModal(e)}>
                            x
                            </button>
                        </div>
                        
                        
                    </div>

                   
                </div>
            </div>
        )

    }
    
}



export default NewServerModal;