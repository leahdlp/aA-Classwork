class FavoritesController < ApplicationController
    def index
        if params.has_key?(:artwork_id)
            favorite = Favorite.where(artwork_id: params[:artwork_id])
            
        elsif params.has_key?(:user_id)
            favorite = Favorite.where(favoriter_id: params[:user_id])
        else 
            favorite = Favorite.all 
        end
        render json: favorite
    end

    def create
        favorite = Favorite.new(favorite_params)
        if favorite.save
            render json: favorite
        else
            render json: favorite.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        render json: favorite 
    end

    private
    def favorite_params 
        params.require(:favorite).permit(:artwork_id, :favoriter_id)
    end


end