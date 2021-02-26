class Rating < ApplicationRecord
    belongs_to :sneaker
    validates :stars, presence: true
end
