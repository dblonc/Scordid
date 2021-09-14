import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { createComment } from '../../actions/comment_actions';
import Chatbox from './chat_box';


const mDTP = (dispatch) => {
    return {
        createComment: (serverId, channelId, comment) => dispatch(createComment(serverId, channelId, comment))
    }
}

export default withRouter(connect(null, mDTP)(Chatbox));