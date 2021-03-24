import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = ({errors}) => ({
        formType: 'signup',
        errors: errors.session,
      
});

const mDTP = dispatch =>({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(Signup);