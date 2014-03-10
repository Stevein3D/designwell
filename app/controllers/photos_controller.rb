class PhotosController < ApplicationController
	# require flickraw

	# def index
	#   render	
	# end

	# def show
	#   FlickRaw.api_key=”7fa0cd18055434599246311abac71dc3”
	#   FlickRaw.shared_secret=”cd47d71ba69e9219”
	#   url=params[:url]
 #  	  info =  flickr.photos.getInfo(:photo_id =>url.split(“/”).last)
	#   @embed_photo={}
	#   @embed_photo["flickr"]=FlickRaw.url(info) rescue FlickRaw.url_o(info) rescue FlickRaw.url_b(info)
	#   @title = info.title
	#   @square_url = FlickRaw.url_s(info)
	#   @taken = info.dates.taken
	#   @views = info.views
	#   @tags = info.tags.map {|t| t.raw}
	# end
end
