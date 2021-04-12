Rails.application.routes.draw do

    namespace :api do
        resources :sneakers do 
            resources :ratings
        end
    end
    
end