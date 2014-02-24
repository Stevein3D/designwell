module ApplicationHelper
	def randomized_background_image
  	  images = ["assets/bg1.PNG", "assets/bg2.PNG", "assets/bg3.PNG", "assets/bg4.PNG", "assets/bg5.PNG", "assets/bg6.PNG"]
  	  images[rand(images.size)]
	end
end
