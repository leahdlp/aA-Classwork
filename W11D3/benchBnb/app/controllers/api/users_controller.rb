class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login_user!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        self.params.require(:user).permit(:email, :password)
    end
end


#     def create
#         @tea = Tea.new(tea_params)
#         if @tea.save
#             # render json: tea
#             render :info
#         else
#             # need to send a status with error message
#             # default status code is 200 (success)
#         end
#     end


# # today's morning demo
# def create
#     @user = User.new(user_params)
#     if @user.save
#       login!(@user)
#       redirect_to user_url(@user)
#     else
#       # Tell the user that something went wrong. Let them try again.
#       flash.now[:errors] = @user.errors.full_messages
#       render :new
#     end
#   end