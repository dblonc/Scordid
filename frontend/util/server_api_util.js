export const createServer = server =>(
    $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: {user}
    })
);


export const deleteServer = () =>{
    return $.ajax({
        method: 'DELETE',
        url: '/api/servers'
    })
}