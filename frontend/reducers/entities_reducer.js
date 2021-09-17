import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import serverReducer from './servers_reducer'
import channelReducer from './channels_reducer';
import commentReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    servers: serverReducer,
    channels: channelReducer,
    comments: commentReducer
});

export default entitiesReducer;
