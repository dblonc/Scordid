class Comment<ApplicationRecord
    validates :user_id, :channel_id, :message, presence: true
    validates :is_private, inclusion: {in:[true, false]} 

    belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

    belongs_to :sender,
    foreign_key: :user_id,
    class_name: :User

end