export const createServer = server => (
    $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: { server }
    })
);


export const deleteServer = serverId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/servers/${serverId}`
    })
}

export const showServers = () =>{
    return $.ajax({
        method: 'GET',
        url: `/api/servers/`
    })
}

export const showServer = serverId =>{
    return $.ajax({
        method: 'GET',
        url: `/api/servers/${serverId}`
    })
}

export const joinServer = inviteCode =>{
    return $.ajax({
        method: 'POST',
        url: 'api/servers/join',
        data: inviteCode
    })
}

export const leaveServer = serverId =>{
    return $.ajax({
        method: 'DELETE',
        url: 'api/servers',
        data: serverId
    })
}