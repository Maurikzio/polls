import { LocalSaver } from 'middlewares';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(LocalSaver))
  );
  return store;
};

export default configureStore;