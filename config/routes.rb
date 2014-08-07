Rails.application.routes.draw do

  root to: 'welcome#index'
  get 'users/:id/animals'    =>   'users#animals'

  devise_for :users
  resources :animals, only: :show
  resources :games, only: [:index, :show, :create]

end
