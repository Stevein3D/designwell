class NotificationMailer < ActionMailer::Base
  
  default to: "shuttershockfilms@gmail.com"

  def new_message(message)
    @message = message
    mail(:from => "#{message.email}", subject: "New Client")
  end

end

