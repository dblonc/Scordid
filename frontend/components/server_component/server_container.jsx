import { connect } from 'react-redux';
import React from 'react';
import Servers from './servers'
import { login, logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mSTP = (state) =>({

});

const mDTP = dispatch =>({

});

export default connect(mSTP, mDTP)(Servers)

