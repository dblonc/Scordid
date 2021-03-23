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
    
    render(){
        return (
            <div className = "login-container">
                <form onSubmit = {this.handleSubmit} className="login-form">
                    <h3>Welcome Back!</h3>
                
                    <span>We're so excited to see you again!</span>
                    <br/>
                    <label> USERNAME OR EMAIL   
                    <br/>
                        <input type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <br/>
                    <label> PASSWORD
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br />
                    <button type="submit" className="login-submit" value={this.props.formType} > Login </button>
                    <p>Need an account? <Link to="/signup">Register</Link> </p>
                </form>



                
            </div>
        )
    }

}

export default Login;