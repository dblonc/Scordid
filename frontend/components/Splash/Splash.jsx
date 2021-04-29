import React from 'react';
import { Link } from 'react-router-dom';



class Splash extends React.Component{
    constructor(props){
        super(props)

        
    }
   


    render(){
        
        const {currentUser, logout} = this.props;
        return(
            <div>
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
                
                    
                    
                </div>

                <div className="midsection">
                    <div className="invite-blurb">
                        <img className="study-group" src={window.studygroupURL} />
                        <div className="inv-description">
                            <div>
                                <h1 className="invite-only">An invite-only place with plenty of room to talk</h1>
                            </div>
                            <div className="collab-p">
                                <p className="collab-text">
                                    Scordid servers are organized into topic-
                                    based channels where you can collaborate, 
                                    share, and just talk about your day without 
                                    clogging up a group chat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hangout-section">
                    <div className="grey-wave-1">
                        <img className="grey-wave" src={window.greywaveURL} />
                    </div>
                    <div className="hangout-grid">                   
                        <div className="hangout-desc">
                            <div>
                                <h2 className="hangout-text">
                                    Where hanging out is easy
                                </h2>
                            </div>
                            <div className="hangout-blurb">
                                Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                            </div>
                        </div>


                        <img className="voice-connected" src={window.voiceconnectedURL} />
                    </div>

                
                </div>
                <div className="fandom-section">
                    <img className="grey-wave-bot" src={window.greywavebotURL} />

                    <div className="fandom-grid">
                        <img className="hangout-list" src={window.hangoutlistURL} />
                        <div className="fandom-desc">
                            <div>
                                <h2 className="fandom-text">
                                    From a few to a fandom
                                </h2>
                                <p className="fandom-blurb">
                                    Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stayingclose-section">
                    <div className="grey-wave-1">
                        <img className="grey-wave" src={window.greywaveURL} />
                    </div>

                    <div className="staying-grid">
                        <div className="staying-desc">
                            <h2 className="staying-text">
                                Reliable tech for staying close
                            </h2>
                            <p className="staying-blurb">
                                Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                            </p>
                            <img className="just-chillin" src={window.justchillinURL} />

                        </div>
                    </div>
                </div>
                <div className="sparkles-section">
                   <div className = "sparkles-grid">
                       <div className="sparkles-container">
                            <img className="sparkles" src={window.sparklesURL7} />
                        </div>
                        <h4 className="ready">
                            Ready to start your journey?

                        </h4>
                        <Link to="/login"> <button className="button-bottom">Open Scordid in your browser</button></Link>

                   </div>
                </div>

            </div>
        )
    }
}


export default Splash;