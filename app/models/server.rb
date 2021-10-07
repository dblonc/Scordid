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

    has_many :users,
    through: :members
    

    # has_many :member_users,
    # through: :members

    after_initialize :ensure_invite_code


    def generate_invite_code
        generated_invite_code = '%06d' % rand(10**6)

        if (Server.find_by(invite_code: generated_invite_code))
            generated_invite_code = '%06d' % rand(10**6)
        end

        self.invite_code = generated_invite_code
    end

    def ensure_invite_code
        if(!self.invite_code)
            generate_invite_code
        end
    end

end
