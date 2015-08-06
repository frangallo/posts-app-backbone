Rails.application.routes.draw do
  root to: "root#root"

  namespace :api do
    resources :posts, except: [:new, :edit]
  end
end
