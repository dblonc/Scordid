import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { createComment, fetchChannelComments, receiveAllComments, receiveCurrentComment } from '../../actions/comment_actions';
import Chatbox from './chat_box';


const mSTP = (state, ownProps) => {
    debugger
    return {
        user_id: state.session.id,
        comments: Object.values(state.entities.comments),
        users: Object.values(state.entities.users) ,
        serverMembers: state.entities.servers[ownProps.match.params.id].users,
        username: state.entities.users[state.session.id].username,
        server: state.entities.servers[ownProps.match.params.id],
        channelname: state.entities.channels[ownProps.match.params.channel_id]?.channelname,
        // oldcomments: Object.values(state.entities.channels[ownProps.match.params.channel_id].comments)


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