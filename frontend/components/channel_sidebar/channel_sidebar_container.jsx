import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import ChannelSidebar from './channel_sidebar'
import { fetchServerChannels } from '../../actions/channel_actions';
import { deleteChannel } from '../../actions/channel_actions';

const mSTP = (state) => {

    return { currentUser: state.entities.users[state.session.id],
        servers: state.entities.servers,
        serverChannels: Object.values(state.entities.channels)
     }
};

const mDTP = (dispatch) => {

    return { 
        logout: () => dispatch(logout()),
        fetchServerChannels: serverId => dispatch(fetchServerChannels(serverId)),
        deleteChannel: (channelId, serverId) => dispatch(deleteChannel(channelId, serverId))
    }

};

export default withRouter(connect(mSTP, mDTP)(ChannelSidebar));