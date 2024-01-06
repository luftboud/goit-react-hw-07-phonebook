import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'
import { store } from 'store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>
);
