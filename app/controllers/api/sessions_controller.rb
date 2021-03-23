class Api::SessionsController < ApplicationController

def create
  
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user 
            log_in!(@user)
            render :show
        else
            render json: ["Username/Password is Invalid"], status: 404
        end
    end

    def destroy
      @user = current_user
      if @user
        log_out
        render :show
      else
        render json: ["Nobody's here! Can't logout!"], status: 404
      end
      
    end



end


