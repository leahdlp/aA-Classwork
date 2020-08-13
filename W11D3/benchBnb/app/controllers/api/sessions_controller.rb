class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login_user(@user)
            render :show
        else
            render json: ["Can't log in"], status: 422
        end
    end

    def destroy
        if current_user
            logout_user
            render json: {}
        else
            render json: ["Can't log out"], status: 404
        end

    end
end
