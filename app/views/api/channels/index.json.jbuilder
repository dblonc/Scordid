@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :channelname, :description, :hostserver_id,:comments
    end
end