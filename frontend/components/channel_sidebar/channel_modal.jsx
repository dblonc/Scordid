import React from 'react';

class NewChannelModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            channelname: "",
            description: "Insert Channel Description Here",
            hostserver_id: ""
        }
        this.hideCModal = this.hideCModal.bind(this);
        this.handleCchange = this.handleCchange.bind(this);
        this.channelCreation = this.channelCreation.bind(this);
    }


    handleCchange(e) {
        this.setState({
            channelname: e.target.value
        })
    }

    hideCModal(e) {
        this.props.hideCModal && this.props.hideCModal(e);
    };


    channelCreation(e) {
        e.preventDefault();
        const channel = Object.assign({}, this.state)
        channel.hostserver_id = parseInt(this.props.match.params.id)
        this.props.createChannel(channel).then((res) => {
            const id = parseInt(Object.keys(res.currentChannel)[0])
            const server_id = Object.values(res.currentChannel)[0].hostserver_id
            this.props.history.push(`/servers/${server_id}/channels/${id}`)
        }
        )
        .then(this.hideCModal())
    }



    render(){

        if(!this.props.showC){
            return null;
        }

        const firstCphase = (
            <>
                <div className = "modal-c-create">
                    <h2 className="c-create-text">Create Text Channel</h2>
                    <div className="in-c-text">
                        <p className="in-text">in Text Channels</p>
                    </div>
                </div>
               
                <form action="channel-form" onSubmit={this.channelCreation}>
                    <div className="channel-create-buttons">
                        <div className="channel-input-title">
                            <h5>CHANNEL TYPE</h5>
                        </div>
                        <button className= "channel-buttons"> 
                            Text Channel
                            <br />
                            <p>Post images, Gifs, stickers, opinions, and puns</p>
                        
                        </button>
                    </div>
                    <div className="channel-textbox">
                        <div className="channel-input-title">
                            <h5>CHANNEL NAME</h5>
                        </div>
                        <input type="text" className="server-modal-textbox" onChange={this.handleCchange} />
                    </div>
                    <div className = "cancel-and-create">
                        <div className = "cancel-button" onClick={this.hideCModal}>
                            Cancel
                        </div>
                        <button className="server-create" type="submit">Create</button>
                    </div>
                </form>
            </>
        )
        return(
            <div className = "modal-spacer">
                <div className="modal-c-background" onClick={this.hideCModal} ></div>
                    <div className="channel-modal-wrapper">
                        <div className="modal-top">
                            <div className="modal-top-text">
                            {firstCphase}
                            </div>
                        </div>
                        <button className = "modal-x" onClick={e=>this.hideCModal(e)}> X </button>
                    </div>
                
                
            </div>
        )
    }


   






}


export default NewChannelModal;