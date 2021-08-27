
import React from "react";
import login from "./session_form/login_form_container";
import Splash from './Splash/Splash';
import {Route, Switch, Link} from 'react-router-dom';
import signup from "./signup_form/signup_form_container";
import {AuthRoute} from '../util/route_util'
import {ProtectedRoute} from '../util/route_util'
import SplashContainer from "./Splash/Splash_container";
import serverContainer from "./server_component/server_container";


// const App = () => (
//     <div>
//        <header>
//             <Link to="/" className="header-link"> SCORDID </Link>
//        </header>
       
       
//         <Switch>
//         <AuthRoute exact path="/login" component={login} />
//         <AuthRoute exact path="/signup" component={signup} />
//         <AuthRoute exact path="/servers" component={Servers} />
//             <Route path='/' component={SplashContainer} />
//         </Switch>
//     </div>

    
// );

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            loggedIn: "NOT LOGGED IN",
            user: {}
        }
    }

    render(){
        return(
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={login} />
            <AuthRoute exact path="/signup" component={signup} />
            <ProtectedRoute path="/servers/" component={serverContainer}/> 
            <ProtectedRoute  path="/servers/" component={serverContainer}/>
            <Route exact path='/' render = {props => (
                <SplashContainer {...props} loggedIn = {this.state.loggedIn}/>
            )}/> 
        </Switch>
    </div>
        )
    }

};
export default App;