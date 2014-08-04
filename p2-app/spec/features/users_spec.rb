require 'rails_helper'

describe "Users" do

  it "should let a user sign up" do

    def sign_up_with(username, first_name, email, birthday, password, password_confirmation)

      visit new_user_path

      fill_in 'username', with: username
      fill_in 'first_name', with: first_name
      fill_in 'email', with: email
      select '08/04/2014', with: birthday
      fill_in 'password', with: password
      fill_in 'password_confirmation', with: password_confirmation

      click_button 'Sign Up'

    end

  end


  it "should automatically take the user to their show page after sign-up" do

    visit user_path

    session
    expect(page).to have_content @user.username
    expect(page).to have_content @user.first_name
    expect(page).to have_content @user.email
    expect(page).to have_content @user.birthday


  end

end
