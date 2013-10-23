class StaticPagesController < ApplicationController
  def index
  	@user = Vimeo::Simple::User.info("designwell")
    @recent = Vimeo::Simple::Album.videos("2526793")
  end

end