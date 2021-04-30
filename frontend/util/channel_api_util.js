export const fetchChannels = () => (
    $.ajax({
        url: '/api/servers'
    })
)

export const createChannel = channelId => (
    $.ajax({
        method: 'POST',
        url: `/api/servers/${channelId}`,
        data: { channel }
    })
);


export const deleteChannel = channelId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/servers/${channelId}`
    })
}