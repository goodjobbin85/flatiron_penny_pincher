class AddBudgetIdToTransactions < ActiveRecord::Migration[6.0]
  def change
    add_reference :transactions, :budget, foreign_key: true
  end
end
