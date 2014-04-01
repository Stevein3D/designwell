class StaticPagesController < ApplicationController

  def index

  	#Motion Related 
  	@user = Vimeo::Simple::User.info("designwell")
    @title = Vimeo::Simple::Channel.videos("682861")
    @animation = Vimeo::Simple::Channel.videos("682882")
    @montage = Vimeo::Simple::Channel.videos("682871")

  end


  
end