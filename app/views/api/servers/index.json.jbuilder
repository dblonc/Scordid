@servers.each do |server|

    json.set! server.id do 
        json.extract! server, :id, :servername, :owner_id
    end

end