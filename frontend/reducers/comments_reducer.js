import{
    RECEIVE_ALL_COMMENTS,
    RECEIVE_CURRENT_COMMENT,
    CREATE_COMMENT,
    DELETE_COMMENT
} from '../actions/comment_actions'


const commentReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, oldState, action.channelComments)
        case RECEIVE_CURRENT_COMMENT:
            return Object.assign({}, oldState, action.comment)
        default:
            return oldState;
    }
}

export default commentReducer;