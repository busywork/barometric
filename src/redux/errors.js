/* -----------------    ACTION TYPES    ------------------ */

const SET_ERROR = 'SET_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';

/* ------------    ACTION CREATORS      ------------------ */

export const errorHandler = error => ({ type: SET_ERROR, error });
export const clearErrors = () => ({ type: CLEAR_ERROR });

/* ------------         REDUCER         ------------------ */

export default (state = [], action) => {
  switch (action.type) {
    case SET_ERROR:
      return [...state, action.error];
    case CLEAR_ERROR:
      return [];
    default:
      return state;
  }
};
