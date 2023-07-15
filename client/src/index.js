import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store,persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="loading" persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// acaefaae163e297d54f9a1b364d8aa6901a9e450968df6e5233051a0fc2fb08957cdecd34c40b9788565ece31a96b9d05289208f80d6f8babf05a6de12ecc8261f90e1bcff0cb7da3a23080c9b1fb895f2b7899e191fcc65d876a33b5374e565936e7f02f1a49e8f2a23df2582f90361d82ac1c6a5097ad61c4dffd7a196733c