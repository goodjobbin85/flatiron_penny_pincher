class Transaction < ApplicationRecord
  belongs_to :budget, optional: true

end
