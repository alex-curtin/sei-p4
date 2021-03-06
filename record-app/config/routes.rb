Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/users/verify', to: 'users#verify'
  
  resources :users do
    resources :records do
      resources :comments
    end
  end

  get '/records/recent', to: 'records#recent'

end
