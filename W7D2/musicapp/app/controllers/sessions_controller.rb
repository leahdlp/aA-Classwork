class SessionsController < ApplicationController
    def new #login page
        render :new
    end

    def create # login action
        # find user in db with corresponding login info
        user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # if user with corresponding info exists... log them in and redirect them
        # to their user show page
        if user
            login!(user)
            redirect_to user_url(user)
        # if user with corresponding info does not exist... give them an error
        else
            # use flash because we are redirecting (to make them reenter password)
            flash[:errors] = ['INVALID CREDENTIALS']
            redirect_to new_session_url
        end
    end

    def destroy # logout action
        # if user is logged in then log user out
        # if user is not logged in then just redirect them to the new session page
        # AKA the login page
        logged_in? ? logout! : (redirect_to new_session_url)
    end
end
