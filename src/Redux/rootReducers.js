import { combineReducers } from 'redux';
import languageReducer from './reducer';
import bookingReducer from './bookingReducer'; // Import the booking reducer

const rootReducer = combineReducers({
  language: languageReducer,
  booking: bookingReducer,  // Add the booking reducer
});

export default rootReducer;
