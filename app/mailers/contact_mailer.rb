class ContactMailer < ApplicationMailer

   default from: 'legacysupplements@noreply.com'

   def contact_message(message)
     @name = message.name
     @email = message.email
     @subject = message.subject
     @content = message.content
     @url  = 'legacysupplements.com'

     mail(to: 'mauriciosuazauribe@gmail.com', subject: "Legacy supplements contact").deliver!
     mail(to: 'kolinastudios@gmail.com', subject: "Legacy supplements contact").deliver!
     mail(to: 'mauriciosuazauribe@hotmail.com', subject: "Legacy supplements contact").deliver!

   end


end
