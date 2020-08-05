class CreateBudgets < ActiveRecord::Migration[6.0]
  def change
    create_table :budgets do |t|
      t.decimal :balance

      t.timestamps
    end
  end
end
