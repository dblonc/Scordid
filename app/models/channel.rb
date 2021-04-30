class Channel<ApplicationRecord
    validates :description, :channelname, :hostserver_id, presence: true 
    validates :description, :channelname, uniqueness: true 

    belongs_to :server,
    class_name: :Server




end