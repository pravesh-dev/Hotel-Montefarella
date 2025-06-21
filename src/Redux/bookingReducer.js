import { SET_BOOKING_DETAILS } from './bookingActions';

const initialState = {
  checkIn: null,
  checkOut: null,
  totalNights: 0,
  guestCount: 0,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
