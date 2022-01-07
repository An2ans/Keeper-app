import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import {store, persistor} from "./redux/store";
// import {Provider} from "react-redux";
// import {PersistGate} from "redux-persist/integration/react";


ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
);

// <PersistGate persistor={persistor} >

// </PersistGate>
