class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render "index"
  end

  def destroy
    @post = Post.find(params[:id])
    @post.delete
    render "show"
  end

  def show
    @post = Post.find(params[:id])
    render "show"
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render "show"
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render "show"
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
