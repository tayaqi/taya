import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/router'
import { Provider } from 'react-redux'
import getStore from './redux/store'

import 'antd-mobile/dist/antd-mobile.css'
import 'antd/dist/antd.css';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);





