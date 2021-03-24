import { connect } from 'react-redux';
import React from 'react';
import Login from './login';
import { login, logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


const mSTP = ({errors}) =>({
    formType: 'login',
    errors: errors.session,
    navLink: <p>Need an account?<Link to="/signup">Register</Link></p>,
});

const mDTP = (dispatch) =>({
    processForm: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(Login);