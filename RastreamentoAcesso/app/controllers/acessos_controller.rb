class AcessosController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
			@todos = Acesso.group(:key)
	end

	def create
		@acesso = Acesso.new(params.require(:acesso).permit!) 
		if @acesso.save
			redirect_to root_url
		end
	end

	def show
		key = params[:key]
		@todos = Acesso.where(key: key).order("date desc")
	end
end
