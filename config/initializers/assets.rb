# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( home-page.css )
Rails.application.config.assets.precompile += %w( revolution.extension.carousel.min)
Rails.application.config.assets.precompile += %w( revolution.extension.actions.min)
Rails.application.config.assets.precompile += %w( revolution.extension.kenburn.min)
Rails.application.config.assets.precompile += %w( revolution.extension.layeranimation.min)
Rails.application.config.assets.precompile += %w( revolution.extension.migration.min)
Rails.application.config.assets.precompile += %w( revolution.extension.navigation.min)
Rails.application.config.assets.precompile += %w( revolution.extension.parallax.min)
Rails.application.config.assets.precompile += %w( revolution.extension.slideanims.min)
Rails.application.config.assets.precompile += %w( revolution.extension.video.min)
Rails.application.config.assets.precompile += %w( xzoom.min)
Rails.application.config.assets.precompile += %w( plugins)
Rails.application.config.assets.precompile += %w( main)