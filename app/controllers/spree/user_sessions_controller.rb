class Spree::UserSessionsController < Devise::SessionsController
  helper 'spree/base'

  include Spree::Core::ControllerHelpers::Auth
  include Spree::Core::ControllerHelpers::Common
  include Spree::Core::ControllerHelpers::Order
  include Spree::Core::ControllerHelpers::Store

  def create
    authenticate_spree_user!

    if spree_user_signed_in?
      respond_to do |format|
        format.html {
          flash[:success] = 'Bienvenido'
          redirect_back_or_default(after_sign_in_path_for(spree_current_user))
        }
        format.js {
          render :json => {:user => spree_current_user,
                           :ship_address => spree_current_user.ship_address,
                           :bill_address => spree_current_user.bill_address}.to_json
        }
      end
    else
      respond_to do |format|
        format.html {
          redirect_to spree.root_path
          flash[:error] = "Credenciales invalidas"
          # render :new
        }
        format.js {
          render :json => { error: t('devise.failure.invalid') }, status: :unprocessable_entity
        }
      end
    end
  end

 
end