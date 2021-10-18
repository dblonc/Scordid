class Api::ServersController < ApplicationController

    def create
        
        @server = Server.new(strong_params)
        @server.owner_id = current_user.id
        
        if @server.save
             Membership.create!({:server_id=>@server.id, :user_id=>current_user.id})
            @membership = Membership.includes(:user).find_by(user_id: current_user.id, server_id: @server.id )
            Channel.create!({:hostserver_id=>@server.id, :description=>"Insert description here", :channelname=>"General"})

            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def index 
        @servers = current_user.servers
        render :index
    end

    def show 
        
        @servers = Server.where(owner_id: params[:id])
        
        if @servers
         render "api/servers/show"
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
        else
            render json: ["You are not the server owner!"], status: 404
        end

    end


    def destroy
        @server = Server.find(params[:id])
        @server.destroy
        render json: @server.id
    end

    def join_server
        @server = Server.find_by(invite_code: params[:inviteCode])

        if @server
            if current_user.memberships.include?(@server)
                render json: ["You are already a member of this server"], status: 422
            else
                Membership.create!({user_id: current_user.id, server_id: @server.id})
                @membership = Membership.includes(:user).find_by(user_id: current_user.id, server_id: @server.id )
                render 'api/servers/show'
            end
        else
            render json: ["Incorrect Invite Code!"], status: 422
        end
    end

    def leave_server
        @server = current_user.memberships.find_by(server_id: params[:server_id])
        @server_membership = Membership.find_by(user_id: current_user.id, server_id: params[:server_id] )

        if @server && @server_membership
            @server_membership.destroy
            render json: @server.id
        else
            render json: ["Server Leave Failed"], status: 422
        end
    end


    private 

    def strong_params
        params.require(:server).permit(:servername, :description, :private_server, :owner_id)
    end
end
