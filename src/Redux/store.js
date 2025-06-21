import { createStore } from 'redux';

// import languageReducer from './reducer';
import rootReducer from './rootReducers';

const store = createStore(rootReducer);

export default store;

