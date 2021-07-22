import { connect } from 'react-redux';
import React from 'react';
import NewServerModal from './newServerModal';
import { createServer } from '../../../actions/server_actions';



const mSTP = (state, ownProps) => ({
    show: ownProps.show
});

const mDTP = (dispatch) => ({

    createServer: server => dispatch(createServer(server))
});

export default connect(mSTP, mDTP)(NewServerModal);