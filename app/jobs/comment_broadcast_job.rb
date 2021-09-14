class CommentBroadcastJob < ApplicationJob

    queue_as :default

    def perform(comment)
        payload ={
            channel_id: comment.channel_id,
            content: comment.message,
            sender: comment.user_id,
            participants: comment.channel.memberships.collect(&:user_id)
        }

        ActionCable.server.broadcast(build_channel_id(comment.channel.id), payload)
    end

    def build_channel_id(id)
        "ChatRoom-#{id}"
    end




end