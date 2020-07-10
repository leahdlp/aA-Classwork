class LikesController < ApplicationController

    def index
        # if params[:likeable_type] == "Artwork"
        #     like = Like.where(likeable_type: params[:likeable_type], likeable_id: params[:likeable_id], user_id: params[:user_id])
            
        # elsif params[:likeable_type] = "Comment"
        #     like = Like.where(likeable_id: params[:comment_id])
        # elsif params.has_key?(:user_id)
        #     like = Like.where(user_id: params[:user_id])
        # else 
        #     like = Like.all
        # end
        if params[:artwork_id]
            like = Like.where(likeable_id: params[:artwork_id])
        elsif params[:comment_id]
            like = Like.where(likeable_id: params[:comment_id])
        elsif params[:user_id]
            like = Like.where(user_id: params[:user_id])
        else
            like = Like.all
        end
        render json: like
    end

    def create
        # like = 'hello'
        # if params[:likeable_type] == "Comment"
        #     like = Like.new(like_params)
        # elsif params.has_key?(:comment_id)
        #     like = Like.new(like_params)
        # end
        like = Like.new(like_params)
        if like.save
            render json: like 
        else
            render json: like.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy
        render json: like 
    end

    private
    def like_params 
        params.require(:like).permit(:likeable_id, :likeable_type, :user_id)
    end

end