class StaticPagesController < ApplicationController
  require 'flickraw'

	FlickRaw.api_key="7fa0cd18055434599246311abac71dc3"
  	FlickRaw.shared_secret="cd47d71ba69e9219"

  def index

  	#Motion Related 
  	@user = Vimeo::Simple::User.info("designwell")
    @title = Vimeo::Simple::Channel.videos("682861")
    @animation = Vimeo::Simple::Channel.videos("682882")
    @montage = Vimeo::Simple::Channel.videos("682871")

    #Print sub-categories
	  @collateral = flickr.photosets.getPhotos(:photoset_id => "72157641487232383")
    @poster = flickr.photosets.getPhotos(:photoset_id => "72157635482932841")
    @posterInfo = flickr.photosets.getInfo(:photoset_id => "72157635482932841")

    #About
    @affiliation = flickr.photosets.getPhotos(:photoset_id => "72157643215739244")
    @client = flickr.photosets.getPhotos(:photoset_id => "72157643680136583")
  end


  
end