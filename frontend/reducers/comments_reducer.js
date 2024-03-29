import{
    RECEIVE_ALL_COMMENTS,
    RECEIVE_CURRENT_COMMENT,
    CREATE_COMMENT,
    DELETE_COMMENT,
    RECEIVE_CHANNEL_COMMENTS
} from '../actions/comment_actions'


const commentReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, oldState, action.channelComments)
        case RECEIVE_CURRENT_COMMENT:
            return Object.assign({}, oldState, action.comment)
        case RECEIVE_CHANNEL_COMMENTS:
            return Object.assign({}, action.payload)
        default:
            return oldState;
    }
}

export default commentReducer;