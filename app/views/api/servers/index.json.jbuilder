# @servers.each do |server|

#     json.set! server.id do 
#         json.extract! server, :id, :servername, :owner_id
#     end

# end

    # json.currentUserServers @servers.each do |server|
    #     json.id server.id 
    #     json.servername server.servername
    #     json.description server.description
    # end

    @servers.each do |server|
        json.set! server.id do 
            json.extract! server, :id, :servername, :description, :owner_id, :users
        json.invite_code server.invite_code
        end
    end