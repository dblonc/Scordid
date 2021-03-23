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
            <div className = "signup-container">
                <form onSubmit = {this.handleSubmit} className="signup-form">
                    <h3>Create an account</h3>
                    <label>EMAIL   
                    <br/>
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <br/>
                    <label>USERNAME
                    <br />
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <br/>
                    <label> PASSWORD
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br/>
                    <button type="submit" className="signup-submit" value={this.props.formType}>Continue</button>
                    <br/>
                    <Link to="/login">Already have an account?</Link>
                </form>



                
            </div>
        )
    }

}

export default Signup;