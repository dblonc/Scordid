json.set! @channel.id do 
    json.extract! @channel, :id, :channelname, :hostserver_id
end