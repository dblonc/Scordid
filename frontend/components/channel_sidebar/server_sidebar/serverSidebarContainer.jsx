import { connect } from 'react-redux';
import React from 'react';
import ServerSideBar from './server_sidebar'
import { Link } from 'react-router-dom';
import {requestCurrentUserServers} from '../../../actions/server_actions'

const mSTP = (state) => ({
    errors: state.errors.session,
    user_id: state.session.id,
    currentUserServers: state.entities.servers.currentUserServers
});

const mDTP = dispatch => ({
    requestCurrentUserServers: () => dispatch(requestCurrentUserServers()),
    createNewServer: server => dispatch(createNewServer(server))


});

export default connect(mSTP, mDTP)(ServerSideBar)

