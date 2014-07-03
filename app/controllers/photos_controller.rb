class PhotosController < ApplicationController

  require 'flickraw'

  FlickRaw.secure = true

	FlickRaw.api_key="7fa0cd18055434599246311abac71dc3"
  FlickRaw.shared_secret="cd47d71ba69e9219"

  def print
  	#Print sub-categories
	  #@collateral = flickr.photosets.getPhotos(:photoset_id => "72157641487232383")
    #@packaging = flickr.photosets.getPhotos(:photoset_id => "72157644043465101")
    #@poster = flickr.photosets.getPhotos(:photoset_id => "72157635482932841")
    #@posterInfo = flickr.photosets.getInfo(:photoset_id => "72157635482932841")

    #About sub categories
    @collateral = flickr.photosets.getPhotos(:photoset_id => "72157641487232383")
    @collateralInfo = flickr.photosets.getInfo(:photoset_id => "72157641487232383")
    @packaging = flickr.photosets.getPhotos(:photoset_id => "72157644043465101")
    @packagingInfo = flickr.photosets.getInfo(:photoset_id => "72157644043465101")
    @poster = flickr.photosets.getPhotos(:photoset_id => "72157635482932841")
    @posterInfo = flickr.photosets.getInfo(:photoset_id => "72157635482932841")

    render :layout => false
  end

  def about
    #About
    @affiliation = flickr.photosets.getPhotos(:photoset_id => "72157643215739244")
    @client = flickr.photosets.getPhotos(:photoset_id => "72157644278561899")
    @staff = flickr.photosets.getPhotos(:photoset_id => "72157644536402675")
    @staffInfo = flickr.photosets.getInfo(:photoset_id => "72157644536402675")
    @blog = flickr.photosets.getPhotos(:photoset_id => "72157644123095188")
    @blogInfo = flickr.photosets.getInfo(:photoset_id => "72157644123095188")

    render :layout => false
  end

end
