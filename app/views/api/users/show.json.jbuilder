json.set! @user.id do 
    json.extract! @user, :id, :username, :email
end