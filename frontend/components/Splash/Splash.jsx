import React from 'react';
import { Link } from 'react-router-dom';



class Splash extends React.Component{
    constructor(props){
        super(props)

        
    }
   


    render(){
        
        const {currentUser, logout} = this.props;
        return(
            <div className="whole-splash">
            
                <div className = "top-quad">
                    <div className= 'nav-bar'>
                       <a href='/'><img className="splash-white-logo" src={scordidwhiteURL} /> </a>
                        <nav>
                            
                            <div className='heading'>
                            
                            <a href="/">Download</a>
                            <a href="#/why">Why Scordid?</a>
                            <a href="#/gas">GAS</a>
                            <a href="/">Safety</a>
                            <a href="/">Support</a>
                            
                                {!currentUser ? (
                                    <Link to="/login"> <button className="login_button">Login</button></Link>
                                )  : (<button className='logout_button' onClick={logout}>Log Out</button>)}
                        
                            </div>    
                        </nav>
                    </div>
                    
                    <div className="splash-midsection">
                        
                            
                        <div className= "blurb">
                            
                                <h1 className="headblurb">Your place to talk</h1>
                                <div className = 'blurb2'>
                                    Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Scordid makes it easy to talk every day and hang out more often.
                                </div>
                        </div>
                        <div className="button-div">
                            <a href='https://github.com/dblonc'><button className="splash-git">Check Out My Github</button></a>
                            <Link to="/login"> <button className="splash-browser">Open Scordid in your browser</button></Link>
                        </div>
                        
                    </div>
                    <div className="bg">
                        <img className="slice-one" src={window.sliceoneURL} />
                        <img className="slice-two" src={window.slicetwoURL} />
                        <img className="light-slash" src={window.lightslashURL} />
                        <img className="slice-four" src={window.slicefourURL} />
                        <img className="castle-one" src={window.castleoneURL} />
                        <img className="castle-two" src={window.castletwoURL} />
                        <img className="big-bottom" src={window.bigmovingbottomURL} />
                        <img className="giant-moving" src={window.giantmovingURL} />
                        <img className="bigblue-moving" src={window.bigbluemovingURL} />
                        <img className="bigblue-moving2" src={window.bigbluemoving2URL} />
                        <img className="medium-three" src={window.mediumthreeURL} />
                        <img className="seethru-one" src={window.seethruoneURL} />
                        <img className="purple-moving" src={window.purplemovingURL} />
                        <img className="thin-moving" src={window.thinmovinglinesURL} />
                        <img className="dia-star" src={window.diastarURL} />
                        <img className="pirate-ship" src={window.priateshipURL} />
                        <img className="purple-arch" src={window.purplearchURL} />
                        <img className="whispy-clouds" src={window.whispycloudsURL} />
                        <img className="balloon-fight" src={window.balloonfightURL} />
                        <img className="city-bg" src={window.citybgURL} />
                        <img className="froggy-homie" src={window.froggyhomieURL} />
                        <img className="swag-guys" src={window.swagguysURL} />
                    </div>
                
            
                
                </div>
                <div className="midsection"></div>
                
                
            </div>
        )
    }
}


export default Splash;