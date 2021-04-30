class Server<ApplicationRecord
validates :servername, :description, :owner_id, presence: true
validates :servername, :description, uniqueness: true
validates :private_server, inclusion: {in:[true, false]}

belongs_to :owner,
class_name: :User

has_many :channels,
class_name: :Channel


end