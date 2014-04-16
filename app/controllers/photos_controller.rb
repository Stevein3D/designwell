class PhotosController < ApplicationController

  require 'flickraw'

	FlickRaw.api_key="7fa0cd18055434599246311abac71dc3"
  	FlickRaw.shared_secret="cd47d71ba69e9219"

  def print
  	#Print sub-categories
	  @collateral = flickr.photosets.getPhotos(:photoset_id => "72157641487232383")
    @poster = flickr.photosets.getPhotos(:photoset_id => "72157635482932841")
    @posterInfo = flickr.photosets.getInfo(:photoset_id => "72157635482932841")

    render :layout => false
  end


end
