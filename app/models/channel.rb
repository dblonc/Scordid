# == Schema Information
#
# Table name: channels
#
#  id            :bigint           not null, primary key
#  description   :string           not null
#  channelname   :string           not null
#  hostserver_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Channel<ApplicationRecord
    validates :description, :channelname, :hostserver_id, presence: true 

    belongs_to :server,
    foreign_key: :hostserver_id,
    class_name: :Server

    has_many :comments, 
    foreign_key: :channel_id,
    class_name: :Comment,
    dependent: :destroy

    has_many :memberships,
    through: :server

    has_many :users,
    through: :memberships





end
