class Api::ChannelsController < ApplicationController

    def create
        @channel = Channel.new(channel_params)
        @channel.hostserver_id = @server.id 

        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def update
        @channel - Channel.find(params[:id])

        if @channel.hostserver_id == @server.id
            if @channel.update(channel_params)
                render :show
            else
                render json: ["Please check your channel listing"], status: 404
            end
            render json: ["You are not the server owner!"], status: 404
        end
    end

    def destroy
        @channel = Channel.find(params[:id])
        @channel.destroy
        render json: @channel.id
    end


private

    def channel_params
        params.require(:channel).permit(:channelname, :description)
    end
end
