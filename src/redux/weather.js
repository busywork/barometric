import axios from 'axios';
import { errorHandler } from './errors';

const OPENWEATHER_API_URL = process.env.REACT_APP_OPENWEATHER_API_URL;
const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

/* -----------------    ACTION TYPES    ------------------ */

const FETCH_DATA = 'FETCH_DATA';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

/* ------------    ACTION CREATORS      ------------------ */

const fetchData = () => ({ type: FETCH_DATA });
const fetchDataSuccess = (weather) => ({ type: FETCH_DATA_SUCCESS, weather });

/* ------------         REDUCER         ------------------ */

export default (state = { isLoading: false }, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, ...action.weather, isLoading: false };
    default:
      return state;
  }
};

/* ------------       THUNK CREATORS     ------------------ */

export const fetchWeather = (coords) => (dispatch) => {
  const { lat, lng } = coords;
  dispatch(fetchData());
  axios
    .get(
      `${OPENWEATHER_API_URL}lat=${lat}&lon=${lng}&exclude=minutely&units=imperial&appid=${OPENWEATHER_API_KEY}`
    )
    .then((res) => dispatch(fetchDataSuccess(res.data)))
    .catch((err) => dispatch(errorHandler(err.message)));
};
