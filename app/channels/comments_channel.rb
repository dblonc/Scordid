class CommentsChannel < ApplicationCable::Channel

    # def subscribed
    #     stream_from "comments_channel#{params[:channelId]}"
    # end

    def subscribed
        stream_for "comments_channel#{params[:channelId]}"
    end

    def speak(data)
        socket = {comment: { user_id: data["user_id"], channel_id: data["channel_id"], message: data["message"] }}
        CommentsChannel.broadcast_to("comments_channel#{params[:channelId]}", socket)
     
    end

end