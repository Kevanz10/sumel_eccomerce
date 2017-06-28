class MessagesController <  Spree::StoreController
  def create
    @message = Spree::Message.new(message_params)
    if @message.valid?
      Spree::HomeMessageMailer.new_message(params[:message]).deliver
      redirect_to root_path, notice: "Hemos recibido su solicitud. Alguien de nuestro 
                                          equipo lo estará contactando"
    else
      flash[:alert] = "Un error ocurrió al momento de mandar el mensaje, intentelo más tarde o  
                        contacte al equipo de soporte."
      redirect_to root_path
    end
  end

private
  def message_params
    params.require(:message).permit(:name, :product, :email, :phone, :website, :details, :aditional)
  end
end
