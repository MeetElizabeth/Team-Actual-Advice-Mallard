class GamesController < ApplicationController

  def index
  end

  def show
    @game = Game.new
    @animal = Animal.find(params[:id])
    @playable_letters = @game.guessable_letters(@animal)
  end

  def create
    game_params[:user_id] = current_user.id
    @game = Game.new(game_params)
    @game.user_id = current_user.id
    if @game.save
      total_points = []
      current_user.games.map do |game|
        total_points << game.points
      end
      new_score = total_points.reduce(:+)
      current_user.update_attribute(:score, new_score)
      render json: @game, status: 200
    end
  end

  private

  def game_params
    params.require(:game).permit(:points, :user_id, :animal_id)
  end

end
