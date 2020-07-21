# == Schema Information
#
# Table name: subs
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :string           not null
#  moderator_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class SubsController < ApplicationController
    before_action :require_current_user_for_sub, only: [:edit, :update]

    def new
        @sub = Sub.new
        render :new
    end
    
    def create
        @sub = Sub.new(sub_params)
        # @sub.moderator_id = params[:moderator_id]
        @sub.moderator_id = current_user.id

        if @sub.save
            redirect_to user_url(params[:moderator_id])
        else
            flash[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def edit
        render :edit
    end

    def update
        @sub = Sub.find_by
        if @sub.update(sub_params)
            redirect_to user_url(@sub.moderator_id)
        else
            flash[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    def show
        @sub = Sub.find_by(id: params[:id])
        render :show
    end

    def index
        @subs = Sub.all
        render :index
    end

    private
    def sub_params
        params.require(:sub).permit(:title, :description)
    end
end
