import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

import rootReducer from '../reducers';

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, {}, applyMiddleware(...middleware));
