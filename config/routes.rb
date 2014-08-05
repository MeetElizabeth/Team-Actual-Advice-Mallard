Rails.application.routes.draw do
  resources :users, except: :index
  resources :animals, only: :show
  resources :games, only: [:index, :show]

  get '/users/:id/animals', to: 'users#animals'
end
