class Spree::Gateway::Epayco < Spree::Gateway
  def provider_class
    Spree::Gateway::Epayco
  end
  def payment_source_class
    Spree::CreditCard
  end

  def method_type
    'epayco'
  end

  def purchase(amount, transaction_details, options = {})
    ActiveMerchant::Billing::Response.new(true, 'success', {}, {})
  end
end