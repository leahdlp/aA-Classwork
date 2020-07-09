class ArtworksController < ApplicationController
    def index
        render json: Artwork.all 
    end

    def create
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: artwork 
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end 

    def show
        render json: Artwork.find(params[:id])
    end

    def destroy
        artwork = Artwork.find(params[:id])
        artwork.destroy
        render json: artwork 
    end

    def update
        artwork = Artwork.find(params[:id])
        if artwork.update(artwork_params)
            redirect_to "/artworks/#{artwork.id}"
        else
            render json: artwork.errors.full_messages, status: 422
        end
    end

    private
        def artwork_params 
            params.require(:artwork).permit(:title, :image_url, :artist_id)
        end


end