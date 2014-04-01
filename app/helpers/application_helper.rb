module ApplicationHelper
	require "flickraw"
	FlickRaw.api_key="7fa0cd18055434599246311abac71dc3"
  	FlickRaw.shared_secret="cd47d71ba69e9219"
	
	def randomized_background_image
	  @background = flickr.photosets.getPhotos(:photoset_id => "72157642848609763")	
  	  images = []
  	  @background.photo{}.each do |url|
  	  	i = FlickRaw.url_b(url) 
  	  	images << i
  	  end
  	  images[rand(images.size)]
	end
end

@background 