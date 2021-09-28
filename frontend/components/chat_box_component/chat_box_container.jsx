import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { createComment, fetchChannelComments, receiveAllComments, receiveCurrentComment } from '../../actions/comment_actions';
import Chatbox from './chat_box';


const mSTP = (state) => {
    
    return {
        comments: Object.values(state.entities.comments),
        user_id: state.session.id,
        users: Object.values(state.entities.users) 
    }
}

const mDTP = (dispatch) => {
    return {
        createComment: (serverId, channelId, comment) => dispatch(createComment(serverId, channelId, comment)),
        fetchChannelComments: (serverId, channelId) => dispatch(fetchChannelComments(serverId, channelId)),
        receiveCurrentComment: comment => dispatch(receiveCurrentComment(comment))
    }
}

export default withRouter(connect(mSTP, mDTP)(Chatbox));