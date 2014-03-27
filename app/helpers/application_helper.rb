module ApplicationHelper
	require "flickraw"
	def randomized_background_image
  	  images = []
  	  @background.photo{}.each do |url|
  	  	i = FlickRaw.url_b(url) 
  	  	images << i
  	  end
  	  images[rand(images.size)]
	end
end

@background 