class Rating < ApplicationRecord
    belongs_to :account
    validates :stars, presence: true
end
