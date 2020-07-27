class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.decimal :amount
      t.string :transaction_type
      t.string :institution

      t.timestamps
    end
  end
end
