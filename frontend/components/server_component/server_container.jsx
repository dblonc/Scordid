import { connect } from 'react-redux';
import React from 'react';
import Servers from './servers'
import { login, logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { requestCurrentUserServers, deleteServer } from '../../actions/server_actions'

const mSTP = (state) =>({
    errors: state.errors.session,
    user_id: state.session.id,
    currentUserServers: state.entities.servers.currentUserServers
});

const mDTP = dispatch =>({
    requestCurrentUserServers : serverId => dispatch (requestCurrentUserServers(serverId)),
    deleteServer : serverId => dispatch (deleteServer(serverId))
    
});

export default connect(mSTP, mDTP)(Servers)

