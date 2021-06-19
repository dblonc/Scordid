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
        return(
            <div>
                <div className="server-modal-wrapper">
                    <div className="modal-top">
                        <div className = "modal-top-text">
                            <h3>Create a server</h3>
                            <p>Your server is where you and your friends hang out. Make 
                                <br />
                                yours and start talking.
                            </p>
                            <button onClick={e => this.hideModal(e)}>
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