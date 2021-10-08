import * as APIUtil from '../util/server_api_util';

export const RECEIVE_CURRENT_SERVER = 'RECEIVE_CURRENT_SERVER';
export const CREATE_SERVER = 'CREATE_SERVER';
export const DELETE_SERVER = 'DELETE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const RECEIVE_CURRENT_USER_SERVERS = 'RECEIVE_CURRENT_USER_SERVERS';

export const createNewServer = server => ({
    type: CREATE_SERVER,
    server
});

export const deleteCurrentServer = (server) =>({
    type: DELETE_SERVER,
    server
});

export const receiveCurrentUserServers = (payload) => ({
    type: RECEIVE_CURRENT_USER_SERVERS,
    payload
})

export const receiveCurrentServer = currentServer => ({
    type: RECEIVE_CURRENT_SERVER,
    currentServer
});

export const receiveServerErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
})

export const createServer = server => dispatch =>(
    APIUtil.createServer(server).then(server =>(
        dispatch(receiveCurrentServer(server))
    ), err => (
        dispatch(receiveServerErrors(err.responseJSON))
    )) 
);

export const deleteServer = serverId => dispatch =>(
    APIUtil.deleteServer(serverId).then(server =>(
        dispatch(deleteCurrentServer(server))
    ))
);

export const requestCurrentUserServers = () => dispatch => (
    APIUtil.showServers().then(payload => (
        dispatch(receiveCurrentUserServers(payload))
    ))
);

export const joinServer = inviteCode => dispatch => (
    APIUtil.joinServer(inviteCode).then(server =>(
        dispatch(receiveCurrentServer(server))
    ))
);

export const leaveServer = serverId => dispatch => (
    APIUtil.leaveServer(serverId).then((serverId)=>(
        dispatch(deleteCurrentServer(serverId))
    ))
)

