json.array!(@users) do |user|
  json.extract! user, :name, :email, :comment, :login
  json.url user_url(user, format: :json)
end
