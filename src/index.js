import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
//import { Provider } from 'react-redux'; // Ayuda a inyectar store a todos nuestros componentes

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import reducer from './Store/reducer'; // Modificar reducer

//const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*<Provider store={store}>
<App />
</Provider>
</React.StrictMode>,*/