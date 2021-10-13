import{
    DELETE_SERVER,
    RECEIVE_CURRENT_SERVER,
    RECEIVE_CURRENT_USER_SERVERS
} from '../actions/server_actions';

const _nullServer = Object.freeze({
    id: null
});

const serverReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_SERVER:
            return Object.assign({},oldState,action.currentServer.server);
        case DELETE_SERVER:
            let newstate = Object.assign({},oldState)
            delete newstate[action.server]
            return newstate;
        case RECEIVE_CURRENT_USER_SERVERS:
            
            return Object.assign({}, action.payload);
        default:
            return oldState;
    }
};

export default serverReducer;