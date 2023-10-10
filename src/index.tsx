import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const setChangeColor = false;
const setTimeOver = false;

function changeColorReducer(state = setChangeColor, action: any) {
  if (action.type === "turn") {
    state = true;
    return state;
  }
  return state;
}

function timeOverReducer(state = setTimeOver, action: any) {
  if (action.type === "timeOver") {
    state = true;
    return state;
  }
  return state;
}

const rootReducer = combineReducers({
  changeColor: changeColorReducer,
  timeOver: timeOverReducer,
});

export const store = createStore(rootReducer);
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
