import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import todoReducer from './redux/todoReducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({reducer : todoReducer});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
