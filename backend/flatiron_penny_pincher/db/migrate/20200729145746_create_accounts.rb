class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.integer :account_number
      t.string :type
      t.decimal :balance

      t.timestamps
    end
  end
end
