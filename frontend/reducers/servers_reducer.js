import{
    DELETE_SERVER,
    RECIEVE_CURRENT_SERVER
} from '../actions/server_actions';

const _nullServer = Object.freeze({
    id: null
});

const serverReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);
    switch(action.type){
        case RECIEVE_CURRENT_SERVER:
            return Object.assign({}, {id: parseInt(Object.keys(action.currentServer)[0])});
        case DELETE_SERVER:
            return _nullServer;
        default:
            return oldState;
    }
};

export default serverReducer;