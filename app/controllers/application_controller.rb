class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :first_name << :username << :birthday << :avatar
    # devise_parameter_sanitizer.for(:sign_up) << :username
    # devise_parameter_sanitizer.for(:sign_up) << :birthday
    # devise_parameter_sanitizer.for(:sign_up) << :avatar
  end

  def initialize_animal_badges
    @animal_list = Animal.all.group_by(&:environment)
    # render layout: 'application', text: ''
  end

end
