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

  def test
  end

  def compute_layout
    if action_name === "empresa"
      "spree/test"
    elsif action_name === "test"
      "spree/test"
    else
      "spree/spree_application" 
    end
  end
end
