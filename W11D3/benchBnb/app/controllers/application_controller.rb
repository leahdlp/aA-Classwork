class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?
    # CRLLL

    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
    
    def require_logged_in
        redirect_to new_api_session_url if !logged_in?
    end
    
    def logged_in?
        !!current_user
    end

    def login_user!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout_user()
        @current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

end
