import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { createComment, fetchChannelComments, receiveAllComments } from '../../actions/comment_actions';
import Chatbox from './chat_box';

const mSTP = (state) => {
    return {
        comments: Object.values(state.entities.comments)
    }
}

const mDTP = (dispatch) => {
    return {
        createComment: (serverId, channelId, comment) => dispatch(createComment(serverId, channelId, comment)),
        fetchChannelComments: (serverId, channelId) => dispatch(fetchChannelComments(serverId, channelId))
    }
}

export default withRouter(connect(mSTP, mDTP)(Chatbox));