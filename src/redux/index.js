import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import weather from './weather';

const reducer = combineReducers({ weather });

export default createStore(reducer, applyMiddleware(thunk, logger));
