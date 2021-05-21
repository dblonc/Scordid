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
                                
                                <h1 className="headblurb">IMAGINE A PLACE...</h1>
                                    <div className = 'blurb2'>
                                        ...where you can belong to a school club, a gaming group, or a worldwide art community. 
                                        <br/>
                                        Where just you and handful of friends can spend time together. A place that makes it easy to 
                                        <br />
                                        talk every day and hang out more often.
                                    </div>
                            </div>
                            <div className="button-div">
                                <a href='https://github.com/dblonc'><button className="splash-git">Check Out My Github</button></a>
                                <Link to="/login"> <button className="splash-browser">Open Scordid in your browser</button></Link>
                            </div>
                            
                        </div>


                        <div className="bg">
                            <img className="new-clouds" src={window.newcloudsURL} />

                            <img className="new-left" src={window.newleftURL} />
                            <img className="new-right" src={window.newrightURL} />
                        </div>
                    
                
                    
                    </div>
                
                    
                    
                </div>

                <div className="midsection">
                    <div className="invite-blurb">
                        <img className="study-group" src={window.newstudygroupURL} />
                        <div className="inv-description">
                            <div className="inv-text">
                                <h2 className="invite-only">
                                    Create an invite-
                                <br />
                                only place where 
                                <br />
                                you belong</h2>
                            
                                <p className="collab-text">
                                    Scordid servers are organized into topic-
                                     <br />
                                    based channels where you can collaborate, 
                                     <br />
                                    share, and just talk about your day without 
                                     <br />
                                    clogging up a group chat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hangout-section">
                    <div className="hangout-grid">   
                        <img className="voice-connected" src={window.newvoiceconnectedURL} />

                        <div className="hangout-desc">

                            <div className="hang-words">
                                <h2 className="hangout-text">
                                    Where hanging out 
                                    <br />
                                    is easy
                                </h2>
                                
                                <p className="hangout-blurb">
                                    Grab a seat in a voice channel when you’re 
                                    <br />
                                    free. Friends in your server can see you’re 
                                    <br />
                                    around and instantly pop in to talk without 
                                    <br />
                                    having to call.
                                </p>
                            </div>

                        </div>

                        

                    </div>

                
                </div>


                <div className="fandom-section">

                    <div className="fandom-grid">

                        <img className="hangout-list" src={window.newfandomURL} />

                        <div className="fandom-desc">

                            <div className = "fandom-words">
                                <h2 className="fandom-text">
                                    From a few to a 
                                    <br />
                                    fandom
                                </h2>
                                <p className="fandom-blurb">
                                    Get a community of any size running with moderation 
                                    <br />
                                    tools and custom member access. Give 
                                    <br />
                                    members special powers, set up private channels, 
                                    <br />
                                    and more.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="stayingclose-section">

                    <div className="staying-grid">
                        <div className="staying-desc">
                            <h2 className="staying-text">
                                Reliable tech for staying close
                            </h2>
                            <p className="staying-blurb">
                                Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their 
                            <br />
                            games, or gather up and have a drawing session with screen share.                            </p>
                            <img className="just-chillin" src={window.newjustchillinURL} />

                        </div>
                    </div>
                </div>
                <div className="sparkles-section">
                   <div className = "sparkles-grid">
                       <div className="sparks-div">
                            <img className="sparkles" src={window.sparklesURL} />
                        </div>
                        
                            <h4 className="ready">
                                Ready to start your journey?

                            </h4>
                            <Link to="/login"> <button className="button-bottom">Open Scordid in your browser</button></Link>
                   </div>
                </div>

                <div className="footer">
                    <div className="footer-grid">
                        <h4> Your place to talk </h4>
                        <div>
                            <a href="https://github.com/dblonc">Github</a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/danielbloncourt/">LinkedIn</a>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}


export default Splash;