import * as APIUtil from '../util/channel_api_util'

export const RECEIVE_CURRENT_CHANNEL = 'RECEIVE_CURRENT_CHANNEL';
export const CREATE_CHANNEL = 'CREATE_CHANNEL';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const RECEIVE_SERVER_CHANNELS = 'RECEIVE_SERVER_CHANNELS'

export const createNewChannel = channel => ({
    type: CREATE_CHANNEL,
    channel
});

export const receiveCurrentChannel = currentChannel => ({
    type: RECEIVE_CURRENT_CHANNEL,
    currentChannel
});

export const receiveServerChannels = (payload) => ({
    type: RECEIVE_SERVER_CHANNELS,
    payload
})

export const deleteCurrentChannel = channel => ({
    type: DELETE_CHANNEL,
    channel
});

export const receiveChannelErrors = errors =>({
    type: RECEIVE_CHANNEL_ERRORS,
    errors 
});

export const fetchServerChannels = serverId => dispatch => (
    APIUtil.fetchServerChannels(serverId).then(channels =>(
        dispatch(receiveServerChannels(channels))
    ))
)

export const createChannel = channel => dispatch => (
    APIUtil.createChannel(channel).then(channel =>(
        dispatch(receiveCurrentChannel(channel))
    ))
);

export const deleteChannel = (channelId, serverId) => dispatch =>(
    APIUtil.deleteChannel(channelId, serverId).then(channel => (
        dispatch(deleteCurrentChannel(channel))
    ))
)

