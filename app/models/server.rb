class Server<ApplicationRecord
validates :servername, :description, :owner_id, :private_server?, presence: true
validates :servername, :description, uniqueness: true

belongs_to :owner,
class_name: :User




end