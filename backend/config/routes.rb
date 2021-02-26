Rails.application.routes.draw do

    namespace :api do
        resources :sneakers
        resources :reviews
    end
    
end