import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ChannelSidebar from './channel_sidebar'

const mSTP = (state) => {

    return { currentUser: state.entities.users[state.session.id] }
};

const mDTP = (dispatch) => {

    return { logout: () => dispatch(logout()) }
};

export default connect(mSTP, mDTP)(ChannelSidebar);