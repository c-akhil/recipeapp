import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import ReduxThunk from "redux-thunk";
var store;

var hash = "v1.0";

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  let state = store.getState();
  window.localStorage.setItem('raptor', JSON.stringify({ ...state, hash }));
});

function getInitialState() {
  try {
    let state = JSON.parse(localStorage.getItem('raptor'));
    if (hash == state.hash) {
      delete state.hash;
      return state;
    }
  } catch (error) {

  }
  return {}
}

export default ((initialState = getInitialState()) => {
  let middlewares = [createLogger(), ReduxThunk];
  store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));
  return store;
})();
