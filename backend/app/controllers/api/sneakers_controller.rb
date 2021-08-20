class Api::SneakersController < ApplicationController

    def index
        @sneakers = Sneaker.all
        render json: @sneakers
    end

    def create

        @sneaker = Sneaker.new(sneaker_params)
        if @sneaker.save
            render json: @sneaker
        else
            render json: {error: 'Could not create a new sneaker.'}
        end
    end

    def show
        @sneaker = Sneaker.find(params[:id])
        render json: @sneaker
    end

    def destroy
        @sneakers = Sneaker.all
        @sneaker = Sneaker.find(params["id"])
        @sneaker.destroy
        render json: @sneakers
    end

    private

    def sneaker_params
        params.require(:sneaker).permit(:name, :price)
    end
end
