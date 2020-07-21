# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string
#  content    :string
#  sub_id     :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PostsController < ApplicationController
    before_action :require_current_user_for_post, only: [:update, :edit]


    def create 
        @post = Post.new(post_params)
        if @post.save 
            redirect_to user_url(@post.author_id)
        else 
            flash[:errors] = @post.errors.full_messages
            render :new 
        end
    end 

   

    def new 
        @post = Post.new 
        render :new 
    end 

    def edit 
        @post = Post.
        render :edit 
    end 

    def update 
        if @post.update(post_params) 
            redirect_to user_url(@post.author_id)
        else  
            flash[:errors] = @post.errors.full_messages 
            render :edit 
        end 
    end

    def destroy 
        @post = Post.find_by(id: params[:id])
        @post.destroy 
        redirect_to user_url(@post.author_id)
    end 

    def show 
        @post = Post.find_by(id: params[:id])
        render :show
    end 
private 
    def posts_params 
        params.require(:post).permit(:title, :content)
end
