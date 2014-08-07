class GamesController < ApplicationController

  def index
  end

  def show
    @game = Game.new
    @animal = Animal.find(params[:id])
    @playable_letters = @game.guessable_letters(@animal)
  end

  def create
    @game = Game.new(game_params)
    if @game.save
      render json: @game, status: 200
    end
  end

  private

  def game_params
    params.require(:gameParams).require(:game).permit(:points, :completed)
  end

end
