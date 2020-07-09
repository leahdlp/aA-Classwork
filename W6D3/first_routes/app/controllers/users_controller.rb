class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessible_entity
        end
    end

    def show
        render json: User.find(params[:id])
    end

    def destroy
        user = User.find(params[:id])
        user.destroy

        render json: user
    end

    def update
        user = User.find(params[:id])
        if user.update(user_params)
            redirect_to "/users/#{user.id}"
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username)
    end
end