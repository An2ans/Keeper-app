import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Router } from "react-router-dom";

// import {store, persistor} from "./redux/store";
// import {Provider} from "react-redux";
// import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
  <Router>
    {/* ROUTE PARA CADA COLECCION? */}
    <Route path="/" Component={App} />
    <Route path="/login" Component={LogIn} />
    <Route path="/sign-up" Component={SignUp} />
  </Router>,
  document.getElementById("root")
);

// <PersistGate persistor={persistor} >

// </PersistGate>
