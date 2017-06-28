class StaticController < Spree::StoreController
	layout "test", only: [:empresa]

  def about
  end

  def security
  end

  def terms
  end

  def empresa
  end
end
