export const fetchChannelComments = (serverId, channelId) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels/${channelId}/comments`
    })
)

export const createComment = (serverId, channelId, comment)  => {
    return $.ajax ({
        method: 'POST',
        url: `/api/servers/${serverId}/channels/${channelId}/comments`,
        data: { comment }
    })
}

export const deleteComment = (channelId,serverId, comment) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/servers/${serverId}/channels/${channelId}/comments/${comment.id}`
    })
}

export const updateComment = (channelId, serverId, comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/servers/${serverId}/channels/${channelId}/comments/${comment.id}`
    })
}