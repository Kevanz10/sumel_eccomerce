release: bundle exec rails spree:install:migrations && bundle exec rails spree_auth:install:migrations && bundle exec rails spree_gateway:install:migrations && bundle exec rake db:migrate
web: bundle exec puma -C config/puma.rb
worker: bundle exec sidekiq -C config/sidekiq.yml
