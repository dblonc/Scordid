import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MembersSidebar from './members_sidebar';

const mSTP = (state, ownProps) => {

    return {
        serverMembers: Object.values(state.entities.servers[ownProps.match.params.id].users)

    }

};


export default withRouter(connect(mSTP, null)(MembersSidebar));