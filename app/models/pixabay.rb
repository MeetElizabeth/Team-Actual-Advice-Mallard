class Pixabay < ActiveRecord::Base
  def self.get_image(animal_name)

    username = ENV["PIXABAY_USERNAME"]
    api_key = ENV["PIXABAY_KEY"]
    api_url = "http://pixabay.com/api/?username=#{username}&key=#{api_key}&search_term=#{animal_name}&image_type=illustration"
    api_call = HTTParty.get(URI.escape(api_url))
    image = api_call["hits"][0]["webformatURL"]
    return image
  end

end
