class Api::ServersController < ApplicationController

    def create
        
        @server = Server.new(strong_params)
        @server.owner_id = current_user.id
        
        if @server.save
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def index 
        @servers = Server.all
        render :index
    end

    def show 
        @server = Server.find(params[:id])
        
        if @server
         render :show
        end
    end


    def update
        @server =Server.find(params[:id])

        if @server.owner_id == current_user.id
            if @server.update(strong_params)
                render :show
            else
                render json: ["Please check your server listing"], status: 404
            end
            render json: ["You are not the server owner!"], status: 404
        end

    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
        render json: @server.id
    end


    private 

    def strong_params
        params.require(:server).permit(:servername, :description, :private_server)
    end
end
