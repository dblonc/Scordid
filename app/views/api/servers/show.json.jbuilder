json.set! @server.id do 
    json.extract! @server, :id, :servername, :description, :owner_id
end


    # json.currentUserServers @servers.each do |server|
    #     json.id server.id 
    #     json.servername server.servername
    #     json.description server.description
    # end
