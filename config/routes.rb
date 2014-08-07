Rails.application.routes.draw do

  root to: 'games#index'

  devise_for :users
  resources :animals, only: :show
  resources :games, only: [:index, :show, :create]

end
