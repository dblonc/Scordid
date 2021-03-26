import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
    handleDemoLogin() {
        return this.setState({
            username: "demouser",
            password: "demouser"
        })
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

    handleSuccessfulSignIn(data) {
        this.props.history.push("/servers");
    };

    render(){
        return (
            <div className = "signup-container">
                <div className="su-background">
                    <a href='/'><img className="splash-white-logo" src={scordidwhiteURL} /> </a>
                    <img src={window.loginwpURL} />
                    
                <div className="signup-box">

                    <form onSubmit = {this.handleSubmit} className="signup-form">
                        <h3>Create an account</h3>
                        {this.renderErrors()}
                        <label>EMAIL   
                            <br/>
                            {this.renderErrors()}
                            <input className="su-email" type="text" value={this.state.email} onChange={this.update('email')}/>
                        </label>
                            <br/>
                        <label>USERNAME
                            <br />
                                <input className="su-username" type="text" value={this.state.username} onChange={this.update('username')} />
                        </label>
                            <br/>
                        <label> PASSWORD
                            <br/>
                                <input className="su-password" type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>
                            <br/>
                        <button type="submit" className="signup-submit" value={this.props.formType}>Continue</button>
                            <br/>
                        <Link to="/login">Already have an account?</Link>
                    </form>

            </div>

                </div>
            </div>
        )
    }

}

export default Signup;