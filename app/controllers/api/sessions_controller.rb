class Api::SessionsController < ApplicationController

def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user 
            log_in!(@user)
            
        else
            flash[:errors] = ['Invalid username or password']
            render :new
        end
    end

    def destroy
    @user = current_user
    if @user
      logout
      render json: {message: ['Peace out fam']}
    else
      render json: ["Nobody's here! Can't logout!"], status: 404
    end
      
    end



end


