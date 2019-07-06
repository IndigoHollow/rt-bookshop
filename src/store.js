import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { composeWithDevTools } from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({ realtime: true });

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
