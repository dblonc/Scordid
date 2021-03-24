import entitiesReducer from './entities_reducer';
import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer';
import errorsReducer from './errorsReducer'

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
   
});


