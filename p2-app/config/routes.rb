Rails.application.routes.draw do

  resources :animals, only: :show
  resources :games, only: [:index, :show]

end
