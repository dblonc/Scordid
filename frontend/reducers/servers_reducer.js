import{
    DELETE_SERVER,
    RECEIVE_CURRENT_SERVER
} from '../actions/server_actions';

const _nullServer = Object.freeze({
    id: null
});

const serverReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_SERVER:
            return Object.assign({}, action.currentServer);
        case DELETE_SERVER:
            return _nullServer;
        default:
            return oldState;
    }
};

export default serverReducer;