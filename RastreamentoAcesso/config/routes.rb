Rails.application.routes.draw do
	post "/acessos" => "acessos#create"
	get "/acessos/new" => "acessos#new"
	get "/acessos/:key/show" => "acessos#show"
	root "acessos#index" 
end
