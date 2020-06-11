import axios from 'axios';

const DARKSKY_API_URL = process.env.REACT_APP_DARKSKY_API_URL;

/* -----------------    ACTION TYPES    ------------------ */

const SET_WEATHER = 'SET_WEATHER';

/* ------------    ACTION CREATORS      ------------------ */

const setWeather = weather => ({ type: SET_WEATHER, weather });

/* ------------         REDUCER         ------------------ */

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_WEATHER:
      return action.weather;
    default:
      return state;
  }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchWeather = coords => dispatch => {
  const { lat, lng } = coords;

  axios
    .get(`${DARKSKY_API_URL}lat=${lat}&lng=${lng}`)
    .then(res => dispatch(setWeather(res.data)))
    .catch(err => console.error(err));
};
