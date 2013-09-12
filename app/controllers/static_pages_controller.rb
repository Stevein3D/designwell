class StaticPagesController < ApplicationController
  def index
    @recent = Vimeo::Simple::Album.videos("2526793")
  end

  def work
    @user = Vimeo::Simple::User.info("designwell")
    @recent = Vimeo::Simple::Album.videos("2526793")
  end
end