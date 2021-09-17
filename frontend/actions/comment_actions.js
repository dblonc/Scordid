import * as APIUtil from '../util/comment_api_util'

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_CURRENT_COMMENT = 'RECEIVE_CURRENT_COMMENT'


export const createNewComment = comment => ({
    type: CREATE_COMMENT,
    comment
});

export const removeComment = commentId => ({
    type: DELETE_COMMENT,
    commentId
});

export const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const receiveAllComments = channelComments => ({
    type: RECEIVE_ALL_COMMENTS,
    channelComments
});

export const receiveCurrentComment = comment => ({
    type: RECEIVE_CURRENT_COMMENT,
    comment
});

export const createComment = (serverId, channelId, comment) => dispatch => (
    APIUtil.createComment(serverId, channelId, comment).then(comment => (
        dispatch(receiveCurrentComment(comment))
    ))

);

export const deleteComment = (channelId, serverId, commentId) => dispatch =>(
    APIUtil.deleteComment(channelId, serverId, commentId).then(commentId =>(
        dispatch(deleteComment(commentId))
    ))
);

export const fetchChannelComments = (serverId, channelId) => dispatch => (
    APIUtil.fetchChannelComments(serverId, channelId).then(comments =>(
        dispatch(receiveAllComments(comments))
    ))
);

