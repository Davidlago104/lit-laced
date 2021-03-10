
class Api::RatingsController < ApplicationController
    before_action :set_sneaker

    def index
        @ratings = @sneaker.ratings
        render json: @ratings
    end

    def create
        @rating = @sneaker.ratings.new(rating_params)
        @rating.save
        render json: @rating
    end

    def show
        @rating = Rating.find(params[:id])
        render json: @rating
    end

    def destroy
        # Not gonna get rid of reviews just yet
    end

    private

    def set_sneaker
        @sneaker = Sneaker.find(params[:sneaker_id])
    end

    def rating_params
        params.require(:rating).permit(:sneaker_id, :stars, :description)
    end

end
