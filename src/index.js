import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store2 from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store2}>
        <App />
    </Provider>,
  document.getElementById('root')
);
