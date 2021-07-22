# == Schema Information
#
# Table name: servers
#
#  id             :bigint           not null, primary key
#  servername     :string           not null
#  description    :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  owner_id       :integer          not null
#  private_server :boolean          not null
#  include a profile image for server. 
class Server<ApplicationRecord
    validates :servername, :description, :owner_id, presence: true
    validates :servername,  uniqueness: true
    validates :private_server, inclusion: {in:[true, false]}

    belongs_to :owner,
    class_name: :User

    has_many :channels,
    foreign_key: :hostserver_id,
    class_name: :Channel

    has_many :members,
    foreign_key: :server_id,
    class_name: :Membership


end
