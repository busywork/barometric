/* -----------------    ACTION TYPES    ------------------ */

const SET_VALUE = 'SET_VALUE';

/* ------------    ACTION CREATORS      ------------------ */

export const setValue = value => ({ type: SET_VALUE, value });

/* ------------         REDUCER         ------------------ */

export default (state = { value: '' }, action) => {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, value: action.value };
    default:
      return state;
  }
};
