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
                       <a href="/">SCORDID</a>
                       <a href="/">Download</a>
                       <a href="#/why">Why Scordid?</a>
                       <a href="/">Safety</a>
                       <a href="/">Support</a>
                        {!currentUser ? (
                            <Link to="/login"> <button className="login_button">Login</button></Link>
                        )  : (<button className='logout_button' onClick={logout}>Log Out</button>)}
                        
                   </header>
               </div>

                
                
            </div>
        )
    }
}


export default Splash;