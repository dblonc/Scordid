import * as APIUtil from '../util/channel_api_util'

export const RECEIVE_CURRENT_CHANNEL = 'RECEIVE_CURRENT_CHANNEL';
export const CREATE_CHANNEL = 'CREATE_CHANNEL';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

export const createNewChannel = channel => ({
    type: CREATE_CHANNEL,
    channel
});

export const receiveCurrentChannel = currentChannel => ({
    type: RECEIVE_CURRENT_CHANNEL,
    currentChannel
});
export const deleteCurrentChannel = channel => ({
    type: DELETE_CHANNEL,
    channel
});

export const receiveChannelErrors = errors =>({
    type: RECEIVE_CHANNEL_ERRORS,
    errors 
});

export const createChannel = channel => dispatch => (
    APIUtil.createChannel(channel).then(channel =>(
        dispatch(receiveCurrentChannel(channel))
    ))
);

export const deleteChannel = channelId => dispatch =>(
    APIUtil.deleteChannel(channelId).then(channel => (
        dispatch(deleteChannel(channel))
    ))
)