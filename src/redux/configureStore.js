import { createStore, combineReducers, applyMiddleware} from 'redux';
import {Bikes} from './bikes';
import {Comments} from './comments';
import { reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
        bikes: Bikes,
        comments: Comments,
        form: formReducer
      }),
      applyMiddleware(thunk, logger)
    );


    return store;
}
