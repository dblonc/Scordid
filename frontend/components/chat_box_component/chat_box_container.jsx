import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { createComment, fetchChannelComments, receiveAllComments, receiveCurrentComment } from '../../actions/comment_actions';
import Chatbox from './chat_box';
import { fetchServerChannels } from '../../actions/channel_actions';
import { requestCurrentUserServers } from '../../actions/server_actions';


const mSTP = (state, ownProps) => {
    return {
        user_id: state.session.id,
        comments: Object.values(state.entities.comments),
        users: Object.values(state.entities.users) ,
        serverMembers: state.entities.servers[ownProps.match.params.id]?.users,
        username: state.entities.users[state.session.id].username,
        server: state.entities.servers[ownProps.match.params.id],
        channelname: state.entities.channels[ownProps.match.params.channel_id]?.channelname,
        // oldcomments: Object.values(state.entities.channels[ownProps.match.params.channel_id].comments)
        invite_code: state.entities.servers[ownProps.match.params.id]?.invite_code

    }
}

const mDTP = (dispatch) => {
    return {
        createComment: (serverId, channelId, comment) => dispatch(createComment(serverId, channelId, comment)),
        fetchChannelComments: (serverId, channelId) => dispatch(fetchChannelComments(serverId, channelId)),
        receiveCurrentComment: comment => dispatch(receiveCurrentComment(comment)),
        requestCurrentUserServers: () => dispatch(requestCurrentUserServers()),
        fetchServerChannels: serverId => dispatch(fetchServerChannels(serverId))


    }
}

export default withRouter(connect(mSTP, mDTP)(Chatbox));