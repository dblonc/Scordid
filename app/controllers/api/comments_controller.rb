class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = @current_user.id

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status:422
        end
    end

    def update
        @comment = Comment.find(params[:id])

        if @comment.user_id == @current_user.id

            if @comment.update(comment_params)
                render :show
            else
                render json: ["Please check your message"], status: 404
            end
            
            render json: ["You did not write this message!"]

        end

    end

    def destroy
        @comment = Comment.find(params[:id])

        if @comment.user_id == @current_user.id

            @comment.destroy
            render json: @comment.id
        end

    end

    private

        def comment_params
            params.require(:comment).permit(:message)
        end


end
