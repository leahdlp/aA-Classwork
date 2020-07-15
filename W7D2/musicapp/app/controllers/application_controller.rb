class ApplicationController < ActionController::Base
    #create a login methods
    #create a logout method
    #create a current_user

    helper_method :current_user, :logged_in?

    def current_user
        # current_user is the previously set current_user OR the user that
        # has the same session token as the current session's session token
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        # reset the user's session token to give them a new/fresh one then set the
        # session's session token to the user's session token to log them
        # in
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        # give the current user a new session token to store in db... unmatches
        # session's session token and user's session token so essentially logs out
        @current_user.reset_session_token!
        # gets rid of old session token for session since it will be expecting a
        # new one upon next login
        session[:session_token] = nil
        # if the current user logged out, we no longer have a current user, this
        # will be reset when someone else logs in
        @current_user = nil
    end

    def logged_in?
        # if current_user == nil then no one is logged in so our method returns
        # false... if current_user != nil then someone is logged in and our method
        # returns false
        !@current_user.nil?
    end

end
