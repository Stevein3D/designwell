class MessagesController < ApplicationController

  # POST /contacts
  # POST /contacts.json

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
    
    if @message.valid?
      NotificationMailer.new_message(@message).deliver
      redirect_to root_url, notice: "Message was successfully sent."
    else
      flash.now.alert = "Please fill all fields."
    end
  end

end