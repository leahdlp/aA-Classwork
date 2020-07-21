class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?
    #CLLLR
    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def log_in!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user 
    end

    def log_out! 
        @current_user.reset_session_token! 
        session[:session_token] = nil 
        @current_user = nil 
    end 

    def logged_in? 
        !current_user.nil?
    end

    def require_logged_in 
        redirect_to new_session_url unless logged_in?
    end 

    def require_current_user_for_sub
        @sub = Sub.find_by(id: params[:id])
        redirect_to new_session_url unless current_user.id == @sub.moderator_id
    end

    def require_current_user_for_post
        @post = Post.find_by(id: params[:id])
        redirect_to new_session_url unless current_user.id == @post.author_id
    end
end
