import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MembersSidebar from './members_sidebar';
import {requestCurrentUserServers } from '../../actions/server_actions';
import { fetchServerChannels } from '../../actions/channel_actions';


const mSTP = (state, ownProps) => {
    let serverMembers = state.entities.servers[ownProps.match.params.id]?.users

    return {
        serverMembers: serverMembers ? Object.values(serverMembers) : []
        // serverMembers: state.entities.servers[ownProps.match.params.id]?.users,

    }

};

const mDTP = (dispatch) => {

    return {
        fetchServerChannels: serverId => dispatch(fetchServerChannels(serverId)),
        requestCurrentUserServers: () => dispatch(requestCurrentUserServers()),

    }

};


export default withRouter(connect(mSTP, mDTP)(MembersSidebar));