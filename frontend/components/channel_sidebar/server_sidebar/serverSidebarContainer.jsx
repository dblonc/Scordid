import { connect } from 'react-redux';
import React from 'react';
import ServerSideBar from './server_sidebar'
import { Link, withRouter } from 'react-router-dom';
import {requestCurrentUserServers, deleteServer, leaveServer} from '../../../actions/server_actions'
import { fetchServerChannels } from '../../../actions/channel_actions';
import { fetchChannelComments } from '../../../actions/comment_actions';

const mSTP = (state) => ({
    errors: state.errors.session,
    user_id: state.session.id,
    currentUserServers: Object.values(state.entities.servers),
    serverChannels: Object.values(state.entities.channels),
    servers: state.entities.servers

});

const mDTP = dispatch => ({
    requestCurrentUserServers: () => dispatch(requestCurrentUserServers()),
    createNewServer: server => dispatch(createNewServer(server)),
    deleteServer: serverId => dispatch(deleteServer(serverId)),
    fetchServerChannels: serverId => dispatch(fetchServerChannels(serverId)),
    fetchChannelComments: (serverId, channelId) => dispatch(fetchChannelComments(serverId, channelId)),
    leaveServer: serverId => dispatch(leaveServer(serverId))




});

export default withRouter(connect(mSTP, mDTP)(ServerSideBar))

