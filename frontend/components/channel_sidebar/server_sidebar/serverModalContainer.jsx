import { connect } from 'react-redux';
import NewServerModal from './newServerModal';
import { createServer, joinServer, requestCurrentUserServers } from '../../../actions/server_actions';
import { createChannel} from '../../../actions/channel_actions'



const mSTP = (state, ownProps) => ({
    show: ownProps.show
});

const mDTP = (dispatch) => ({

    createServer: server => dispatch(createServer(server)),
    joinServer: inviteCode => dispatch(joinServer(inviteCode)),
    requestCurrentUserServers: () => dispatch(requestCurrentUserServers()),
    createChannel: channel => dispatch(createChannel(channel))


});

export default connect(mSTP, mDTP)(NewServerModal);