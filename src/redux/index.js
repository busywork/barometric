import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import weather from './weather';
import errors from './errors';

const reducer = combineReducers({ weather, errors });

export default createStore(reducer, applyMiddleware(thunk, logger));
