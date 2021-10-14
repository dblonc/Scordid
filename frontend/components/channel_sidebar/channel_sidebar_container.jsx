import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import ChannelSidebar from './channel_sidebar'
import { fetchServerChannels } from '../../actions/channel_actions';
import { deleteChannel } from '../../actions/channel_actions';
import { leaveServer, requestCurrentUserServers} from '../../actions/server_actions';

const mSTP = (state, ownProps) => {

    return { 
        currentUser: state.entities.users[state.session.id],
        servers: state.entities.servers,
        serverChannels: Object.values(state.entities.channels),
        serverMembers: state.entities.servers[ownProps.match.params.id].users,
        user_id: state.session.id,
        username: state.entities.users[state.session.id].username
     }
};

const mDTP = (dispatch) => {

    return { 
        logout: () => dispatch(logout()),
        fetchServerChannels: serverId => dispatch(fetchServerChannels(serverId)),
        deleteChannel: (channelId, serverId) => dispatch(deleteChannel(channelId, serverId)),
        leaveServer: serverId => dispatch(leaveServer(serverId)),
        requestCurrentUserServers: () => dispatch(requestCurrentUserServers()),

    }

};

export default withRouter(connect(mSTP, mDTP)(ChannelSidebar));