class StaticPagesController < ApplicationController
  require 'flickraw'

    FlickRaw.secure = true

	  FlickRaw.api_key="7fa0cd18055434599246311abac71dc3"
  	FlickRaw.shared_secret="cd47d71ba69e9219"

  def index
    #Splash images
    @splash = flickr.photosets.getPhotos(:photoset_id => "72157644439600462")

  	#Motion Related 
  	@user = Vimeo::Simple::User.info("designwell")
    @title = Vimeo::Simple::Channel.videos("682861")
    @titleInfo = Vimeo::Simple::Channel.info("682861")
    @animation = Vimeo::Simple::Channel.videos("682882")
    @animationInfo = Vimeo::Simple::Channel.info("682882")
    @montage = Vimeo::Simple::Channel.videos("682871")
    @montageInfo = Vimeo::Simple::Channel.info("682871")

    #Print sub-categories
	  # @collateral = flickr.photosets.getPhotos(:photoset_id => "72157641487232383")
   #  @collateralInfo = flickr.photosets.getInfo(:photoset_id => "72157641487232383")
   #  @packaging = flickr.photosets.getPhotos(:photoset_id => "72157644043465101")
   #  @packagingInfo = flickr.photosets.getInfo(:photoset_id => "72157644043465101")
   #  @poster = flickr.photosets.getPhotos(:photoset_id => "72157635482932841")
   #  @posterInfo = flickr.photosets.getInfo(:photoset_id => "72157635482932841")

    #Reel link
    @reel = Vimeo::Simple::Channel.videos("740653")
  end

end