export const fetchServerChannels = serverId => (
    $.ajax({
        url: `/api/servers/${serverId}/channels`
    })
)

export const createChannel = channel => (
    $.ajax({
        method: 'POST',
        url: `/api/servers/${channel.hostserver_id}/channels/`,
        data: { channel }
    })
);


export const deleteChannel = (channelId, serverId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/servers/${serverId}/channels/${channelId}`
    })
}