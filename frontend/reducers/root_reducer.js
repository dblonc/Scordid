import entitiesReducer from './entities_reducer';
import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer
   
});


