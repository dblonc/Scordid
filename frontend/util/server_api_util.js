export const createServer = server =>(
    $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: {server}
    })
);


export const deleteServer = serverId =>{
    return $.ajax({
        method: 'DELETE',
        url: `/api/servers/${serverId}`
    })
}