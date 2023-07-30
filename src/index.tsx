import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { App } from "./App/App";
import "normalize.css";
import "./styles/index.css";

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/phonebook">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
