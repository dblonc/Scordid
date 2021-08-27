import{
    RECEIVE_CURRENT_CHANNEL,
    CREATE_CHANNEL,
    DELETE_CHANNEL,
    RECEIVE_SERVER_CHANNELS
} from '../actions/channel_actions'

const channelReducer = (oldState = {}, action)=> {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_CHANNEL:
            return Object.assign({}, oldState, action.currentChannel);
        case DELETE_CHANNEL:
                let newState = Object.assign({}, oldState)
                delete newState[action.channel]
                return newState;
        case RECEIVE_SERVER_CHANNELS:
            return Object.assign({}, action.payload);
        default:
            return oldState
    }
};

export default channelReducer;