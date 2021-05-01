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
    validates :channelname, uniqueness: true

    belongs_to :server,
    foreign_key: :hostserver_id,
    class_name: :Server




end
