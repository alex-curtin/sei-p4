class CommentsController < ApplicationController
  before_action :authorize_request, except: %i[index show]
  
  def index
    @record = Record.find(params[:record_id])
    @comments = Comment.where(record_id: @record.id).order(created_at: :asc)
    render json: @comments, :include => {:user => {:only => %i[username]}}, status: :ok
  end

  def show
    @comment = Comment.find(params[:id])
    render json: @comment, status: :ok
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment, include: :user, status: :created
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render json: @comment, include: :user, status: :ok
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      head 204
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :record_id)
  end

end