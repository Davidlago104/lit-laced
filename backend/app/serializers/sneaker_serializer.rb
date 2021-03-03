class SneakerSerializer < ActiveModel::Serializer
  attributes :id, :name, :price
  has_many :ratings
end
