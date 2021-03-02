class Sneaker < ApplicationRecord
    has_many :ratings
    validates :name, :price, presence: true

end
