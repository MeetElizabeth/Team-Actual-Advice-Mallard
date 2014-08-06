class GamesController < ApplicationController

  def index
  end

  def show
    @game = Game.new
    @animal = Animal.find(params[:id])
    @playable_letters = @game.guessable_letters(@animal)
  end

end
