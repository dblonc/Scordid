@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :user_id, :message, :created_at
    end
end