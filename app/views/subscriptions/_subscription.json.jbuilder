json.extract! subscription, :id, :email, :phone, :created_at, :updated_at
json.url subscription_url(subscription, format: :json)
