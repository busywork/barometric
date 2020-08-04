import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import errors from './errors';
import search from './search';
import weather from './weather';

const reducer = combineReducers({ search, weather, errors });

export default createStore(reducer, applyMiddleware(thunk, logger));
