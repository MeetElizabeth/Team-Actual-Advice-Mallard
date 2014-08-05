Rails.application.routes.draw do

  root to: 'welcome#index'

  devise_for :users
  resources :animals, only: :show
  resources :games, only: [:index, :show]

end
