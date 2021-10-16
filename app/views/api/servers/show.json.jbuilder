json.set! "server" do
    json.set! @server.id do 
        json.extract! @server, :id, :servername, :description, :owner_id
        json.invite_code @server.invite_code
        json.general_id @server.channels[0].id
        json.set! "users" do
            @server.users.each do |user|
                json.set! user.id do 
                    json.extract! user, :id, :username
                end 
            end
        end
    end
end

json.set! "members" do
    json.set! @membership.user_id do 
    json.extract! @membership, :id, :user_id, :user
    end
end
