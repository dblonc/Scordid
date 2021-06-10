import React from 'react';
import { render } from 'react-dom';

export const NewServerModal = ({showModal, setModal}) => {

    return(
    <div>
        <div className="server-modal-wrapper">
            <div className="modal-content">
                <div className = "modal-text">
                    {showModal ? <div>Modal On</div> : <div>Off</div>};
                </div>
            </div>
        </div>
    </div>
    )

}

export default NewServerModal;