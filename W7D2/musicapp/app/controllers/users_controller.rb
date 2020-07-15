class UsersController < ApplicationController
    def show
        # find the user based off the id param/wildcard passed in
        @user = User.find_by(id: params[:id])
        # direct to that user's show page
        render :show
    end

    def new # sign up page
        # create dummy user to manipulate in template
        @user = User.new
        # take user to the create account form
        render :new
    end

    def create # sign up action
        # create a user instance with params passed (email, pw)
        @user = User.new(user_params)
        # if we were able to save that user in our db (passed all validations)
        if @user.save!
            # login the user and redirect them to their user page
            login!(@user)
            redirect_to user_url(@user)
        # if we weren't able to save that user in our db (didn't pass validations)
        else
            # use flash.now to do errors because we are rendering
            flash.now[:errors] = @user.errors.full_messages
            # render new form so they don't have to rewrite all the info that they
            # entered correctly
            render :new
        end
    end

    private 
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
