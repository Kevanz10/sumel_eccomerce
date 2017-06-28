module Spree
  class HomeMessageMailer < ApplicationMailer
    def new_message(message)
      @message = message
      mail(to: "krojas1171@gmail.com", subject: 'Cotizacíon', from: @message['name'])
    end
  end
end

