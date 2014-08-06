class UsersController < ApplicationController

  before_action :authorize, only: [:edit, :update, :destroy]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to user_path
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def animals
  end

  private
  def user_params
    params.require(:user).permit(:username, :first_name, :password, :password_confirmation)
  end

end