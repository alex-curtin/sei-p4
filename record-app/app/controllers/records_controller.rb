class RecordsController < ApplicationController
  before_action :authorize_request, except: %i[index show]
  
  def index
    @user = User.find(params[:user_id])
    @records = Record.where(user_id: @user.id)
    render json: @records, status: :ok
  end

  def show
    @user = User.find(params[:user_id])
    @record = Record.find(params[:id])
    render json: @record, status: :ok
  end

  def create
    @record = Record.new(record_params)
    if @record.save
      render json: @record, status: :created
    end
  end

  def update
    @record = Record.find(params[:id])
    if @record.update_attributes(record_params)
      render json: @record, status: :ok
    end
  end

  def destroy
    @record = Record.find(params[:id])
    if @record.destroy
      head 204
    end
  end

  private

  def record_params
    params.require(:record).permit(:artist, :title, :year, :record_label, :cat_num, :country, :format, :speed, :disc_condition, :sleeve_condition, :description, :img_url, :user_id)
  end

end