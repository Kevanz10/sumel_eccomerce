module Spree
  class Message
    include ActiveModel::Model
    include ActiveModel::Conversion
    include ActiveModel::Validations

    attr_accessor :name, :email, :product, :phone, :website, :details, :aditional

    validates :name, :email, :product, presence: true
  end
end