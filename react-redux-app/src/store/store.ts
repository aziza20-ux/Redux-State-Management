import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import type { Middleware } from 'redux';
import {rootReducer} from './reducers';
import { logger } from 'redux-logger';

export const store = createStore(rootReducer, applyMiddleware(logger as Middleware));
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
