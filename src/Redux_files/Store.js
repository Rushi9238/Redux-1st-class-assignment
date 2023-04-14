import {legacy_createStore,applyMiddleware} from 'redux'
import { myReducer } from './Reducer';
import logger from 'redux-logger'

export const myStore=legacy_createStore(myReducer,applyMiddleware(logger));
