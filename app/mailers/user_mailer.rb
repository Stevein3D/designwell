class UserMailer < ActionMailer::Base
  default to: "stevein3d@me.com"

  def welcome_email(user)
  	@user = user
  	# @url = 'http://designwell.com/login'
  	mail(from: "#{user.email}", subject: "Welcome to My Awesome Site")
  end
end
