Rails.application.routes.draw do
  resources :users, except: :index
  resources :animals, only: :show
  resources :games, only: [:index, :show]

  get '/', to: 'sessions#new'
  get '/users/:id/animals', to: 'users#animals'

  # Sessions
  get '/login' => 'sessions#new'
  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end
