require 'rails_helper'

describe User do

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:score) }
  it { should validate_uniqueness_of(:username)}
  it { should validate_uniqueness_of(:email)}
  it { should have_secure_password }
  it { should have_many(:games)}
  it { should have_many(:animals)}

end
