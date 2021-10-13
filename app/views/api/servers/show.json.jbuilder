json.set! "server" do
    json.set! @server.id do 
        json.extract! @server, :id, :servername, :description, :owner_id
    end
end

json.set! "members" do
    json.set! @membership.user_id do 
    json.extract! @membership, :id, :user_id, :user
    end
end
