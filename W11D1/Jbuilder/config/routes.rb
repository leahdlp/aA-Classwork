Rails.application.routes.draw do
  # Your routes here!

  namespace :api, defaults: { format: :json } do
  # Your routes here
    resources :guests, only: [:show, :index]
    resources :gifts, only: [:show, :index]
    resources :parties, only: [:show, :index]    
  end

  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
