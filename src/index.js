import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { GlobalStyles } from '../src/Styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);