
import React from "react";
import login from "./session_form/login_form_container";
import Splash from './Splash/Splash';
import {Route, Switch, Link} from 'react-router-dom';
import signup from "./signup_form/signup_form_container";
import {AuthRoute} from '../util/route_util'
import SplashContainer from "./Splash/Splash_container";

const App = () => (
    <div>
       <header>
            <Link to="/" className="header-link"> SCORDID </Link>
       </header>
       
       
        <Switch>
        <AuthRoute exact path="/login" component={login} />
        <AuthRoute exact path="/signup" component={signup} />
            <Route path='/' component={SplashContainer} />
        </Switch>
    </div>

    
);

export default App;