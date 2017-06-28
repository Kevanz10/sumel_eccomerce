class CreateSpreeSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :spree_subscriptions do |t|
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
