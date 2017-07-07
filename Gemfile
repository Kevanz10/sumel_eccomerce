source 'https://rubygems.org'

ruby '2.3.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.0.0.1'
# Use postgres as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

#Social share gem
gem 'social-share-button'


# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Puma as the app server
gem 'puma'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem "letter_opener"
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

# Heroku fix
group :production, :staging do
  gem 'rails_12factor'
  gem 'rack-timeout'
  gem 'font_assets', github: 'masterexploder/font_assets'
end

# file uploades & assets
#gem 'paperclip' # Image Rescaling for aws
#gem 'aws-sdk', '~> 1.61.0'

gem "paperclip", ">= 5.0"
gem "aws-sdk", ">= 2.0"

gem 'fog-aws'

# caching
gem 'dalli' # memcache
gem 'rack-cache' # http caching
gem 'kgio' # faster kgio IO system

# rollbar
gem 'rollbar'

# newrelic
gem 'newrelic_rpm'

# sidekiq
gem 'sidekiq'
gem 'sinatra', require: nil

# Spree gems
gem 'spree', github: 'spree/spree', branch: ENV['SPREE_BRANCH']
gem 'spree_gateway', github: 'spree/spree_gateway'
gem 'spree_auth_devise', github: 'spree/spree_auth_devise'

gem 'spree_braintree_vzero', github: 'spree-contrib/spree_braintree_vzero'


gem 'active_shipping'

gem 'spree_active_shipping', github: 'spree-contrib/spree_active_shipping'

gem 'activemodel-serializers-xml', git: 'https://github.com/rails/activemodel-serializers-xml'

gem 'draper', github: 'audionerd/draper', branch: 'rails5'

gem "camaleon_cms",'2.4.3.8', git: 'https://github.com/mauricioSuaza/camaleon-cms'


#################### Camaleon CMS include all gems for plugins and themes ####################
require './lib/plugin_routes'
instance_eval(PluginRoutes.draw_gems)
