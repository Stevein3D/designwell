require 'test_helper'

class ClientMailerTest < ActionMailer::TestCase
  test "hello_message" do
    mail = ClientMailer.hello_message
    assert_equal "Hello message", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
