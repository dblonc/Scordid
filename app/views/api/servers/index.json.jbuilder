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

#    @servers.each do |server|
#        json.set! server.id do 
#            json.extract! server, :id, :servername, :description, :owner_id, :users
#            json.invite_code server.invite_code
#          users = server.users 
#            users.each do |user|
#                json.set! user.id do 
#                    json.extract! user, :id, :username
#                end 
#            end
#        end
#    end

    @servers.each do |server|
        json.set! server.id do 
            json.extract! server, :id, :servername, :description, :owner_id
            json.invite_code server.invite_code
            json.general_id server.channels[0].id
            json.set! "users" do
                server.users.each do |user|
                    json.set! user.id do 
                        json.extract! user, :id, :username
                    end 
                end
           end
        end
    end