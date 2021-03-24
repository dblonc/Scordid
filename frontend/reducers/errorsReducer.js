import { combineReducers } from 'redux';
import session_errors_reducer from './session_errors_reducer';


const errorsReducer = combineReducers({
    session: session_errors_reducer
});

export default errorsReducer;
