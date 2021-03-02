Rails.application.routes.draw do

    namespace :api do
        resources :sneakers do 
            resources :reviews
        end
    end
    
end