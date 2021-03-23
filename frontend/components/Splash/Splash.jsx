import React from 'react';
import { Link } from 'react-router-dom';



class Splash extends React.Component{
    constructor(props){
        super(props)
    }
   

    render(){
        
        const {currentUser, logout} = this.props;
        return(
            <div className = "header_div">
               <div className= 'top-part'>
                   <header className='heading'>
                       <a href="/">Download</a>
                       <a href="#/why">Why Scordid?</a>
                       <a href="#/gas">GAS</a>
                       <a href="/">Safety</a>
                       <a href="/">Support</a>
                        {!currentUser ? (
                            <Link to="/login"> <button className="login_button">Login</button></Link>
                        )  : (<button className='logout_button' onClick={logout}>Log Out</button>)}
                        
                   </header>
                </div>
                <div className="splash-midsection">
                   <div className= "blurb">
                        <h1 className="headblurb">Your place to talk</h1>
                        <div className = 'blurb2'>
                            Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day and hang out more often.
                        </div>
                    </div>
                    <div className="button-div">
                        <a href='https://github.com/dblonc'><button className="splash-git">Check Out My Github</button></a>
                        <Link to="/login"> <button className="splash-browser">Open Scordid in your browser</button></Link>
                    </div>
                </div>
                <div className="background">
                    <img className="swagguys" src="/home/dblonc/Desktop/fullstackproject/scordid/app/assets/images/dcimages/swagguys.svg" alt=""/>
                </div>
               

                
                
            </div>
        )
    }
}


export default Splash;