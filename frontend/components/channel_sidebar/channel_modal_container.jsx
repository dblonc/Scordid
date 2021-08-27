import {connect } from 'react-redux';
import NewChannelModal from './channel_modal';
import { createChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    showC: ownProps.showC
});

const mDTP = (dispatch) => ({
    createChannel: channel => dispatch(createChannel(channel))
});

export default withRouter(connect(mSTP, mDTP)(NewChannelModal))