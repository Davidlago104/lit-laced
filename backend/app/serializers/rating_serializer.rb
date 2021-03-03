class RatingSerializer < ActiveModel::Serializer
  attributes :id, :stars, :description, :sneaker_id
end
