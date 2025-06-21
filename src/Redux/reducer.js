import { CHANGE_LANGUAGE } from './actions';

const initialState = {
  language: 'english', // Default language
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
