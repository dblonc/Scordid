import React from 'react';


class ServerContextMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contextMenuShow: false,
            x: 0,
            y: 0,
        };

        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.renderContextMenu = this.renderContextMenu.bind(this)
    }

    handleContextMenu() {
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            const clickX = e.clientX;
            const clickY = e.clientY;
            this.setState({
                contextMenuShow: true,
                x: clickX,
                y: clickY
            })
        });
        document.addEventListener("click", (e) => {
            e.preventDefault();
            this.setState({
                contextMenuShow: false,
                x: 0,
                y: 0
            });
        });
    };


    renderContextMenu() {
        if (this.state.contextMenuShow === true) {
            var contextStyle = {
                'position': 'absolute',
                'top': `${this.state.y}px`,
                'left': `${this.state.x}px`,
                'background-color': 'white',
                'z-index': '9999'
            }
            return (
                <div style={contextStyle}>
                    <div>
                        This is a context menu
                    </div>
                    <div>
                        {this.renderDelete()}
                    </div>
                </div>
                // <ServerContextMenu style={contextStyle}/>
            )
        } else {
            return null
        }
    }

    render(){
        return(
            <div>
                testing
            </div>
        )
    }
}

export default ServerContextMenu;