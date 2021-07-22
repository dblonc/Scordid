import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.handleSuccessfulSignIn = this.handleSuccessfulSignIn.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoLogin(){
        const user = {
            username: "demouser",
            password: "demouser"
        }
        this.props.processForm(user)
    }
    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };


    handleSuccessfulSignIn() {
        if(this.props.processForm(user)){
        this.props.history.push("/servers");
        }
    };
    
    render(){
        return (
            <div className = "login-container">
                
                <div className="background">
                    <a href='/'><img className="splash-white-logo" src={scordidwhiteURL} /> </a>
                    <img src={window.loginwpURL} />
            
                    <div className = "login-box">
                   
                        <div className="form-section">
                        
                            <form onSubmit = {this.handleSubmit} className="login-form">
                                
                                <h3>Welcome Back!</h3>

                                <div className="excited-text">
                                    We're so excited to see you again!
                                    <br/>
                                    {this.renderErrors()}
                                </div>
                                <div className = "username-input">
                                    <br/>
                                <h5> USERNAME OR EMAIL</h5>
                                    <input className = "email-box" type="text" value={this.state.username} onChange={this.update('username')}/>
                                </div>
                                
                                <div className="password-input">
                                <h5> PASSWORD </h5>
                                    <input className = "password-box" type="password" value={this.state.password} onChange={this.update('password')}/>
                                
                                </div>
                            
                                <button type="submit" className="login-submit" value={this.props.formType} > Login </button>
                                <p>Need an account? <Link to="/signup">Register</Link> </p>
                        
                                
                            </form>
                        </div>

                    <div className="right-side-box">
                        <h3>Log in with Demo Button</h3>
                        <p>Press this button to log in instantly.</p>
                        <button className="demo-button" onClick={this.handleDemoLogin}>Demo User</button>
                    </div>
                </div>
                


                </div>
            </div>
        )
    }

}

export default Login;