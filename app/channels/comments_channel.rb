class CommentsChannel < ApplicationCable::Channel

    def subscribed
        stream_for "comments_channel#{params[:channelId]}"
    end

    def speak(data)
        socket = {message: {message: data['body'], sender_id: data["authorId"], channel_id: data["channelId"]}}
        CommentsChannel.broadcast_to("comments_channel", socket)
    end

end