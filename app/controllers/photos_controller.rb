class PhotosController < ApplicationController

  require 'flickraw'

	FlickRaw.api_key="7fa0cd18055434599246311abac71dc3"
  	FlickRaw.shared_secret="cd47d71ba69e9219"

  def print
  	#Print sub-categories
	  #@collateral = flickr.photosets.getPhotos(:photoset_id => "72157641487232383")
    #@packaging = flickr.photosets.getPhotos(:photoset_id => "72157644043465101")
    #@poster = flickr.photosets.getPhotos(:photoset_id => "72157635482932841")
    #@posterInfo = flickr.photosets.getInfo(:photoset_id => "72157635482932841")

    #About sub categories
    @affiliation = flickr.photosets.getPhotos(:photoset_id => "72157643215739244")
    @client = flickr.photosets.getPhotos(:photoset_id => "72157643680136583")
    @staff = flickr.photosets.getPhotos(:photoset_id => "72157644536402675")
    @staffInfo = flickr.photosets.getInfo(:photoset_id => "72157644536402675")
    @blog = flickr.photosets.getPhotos(:photoset_id => "72157644123095188")
    @blogInfo = flickr.photosets.getInfo(:photoset_id => "72157644123095188")

    render :layout => false
  end


end
