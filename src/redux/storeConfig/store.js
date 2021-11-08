import { createStore, compose } from "redux";
import rootReducer from "../rootReducer";

const saveToLocalStorage = (params) => {
  try {
    localStorage.setItem("products", JSON.stringify(params));
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem("products");

    if (state === null) return undefined;

    return JSON.parse(state);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeEnhancers()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export { store };
