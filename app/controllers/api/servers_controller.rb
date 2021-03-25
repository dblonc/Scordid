class Api::ServersController < ApplicationController

    def create
        @server = Server.create(strong_params)
        @server.owner_id = current_user.id

        if @server.save!
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def edit
        @server = Server.find(params[:id])
    end

    def update
        @server =Server.find(params[:id])

        if @server.update(strong_params)
            render :show
        else
            render :edit
        end
        
    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
        render :show
    end


    private 

    def strong_params
        params.require(:server).permit(:servername, :description)
    end
end
