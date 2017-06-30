class StaticController < Spree::StoreController
  layout :compute_layout

  def about
  end

  def services
  end

  def terms
  end

  def empresa
  end

  def compute_layout
    action_name == "empresa" ? "test" : "spree/spree_application" 
  end
end
