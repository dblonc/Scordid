@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :username, :memberships, :comments, :email
    end
end