'use strict';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import callTraceMiddleware from '../middlewares/logger';
import reducers from '../reducers/index';


const createStoreWithMiddleware = applyMiddleware(callTraceMiddleware, thunk,)(createStore);
export default function configStore() {
    const store = createStoreWithMiddleware(reducers);
    return store;
}


