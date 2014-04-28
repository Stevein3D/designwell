class AboutController < ApplicationController
  require 'flickraw'

	FlickRaw.api_key="7fa0cd18055434599246311abac71dc3"
  	FlickRaw.shared_secret="cd47d71ba69e9219"

  def about
    @affiliation = flickr.photosets.getPhotos(:photoset_id => "72157643215739244")
    @client = flickr.photosets.getPhotos(:photoset_id => "72157643680136583")
  end

end