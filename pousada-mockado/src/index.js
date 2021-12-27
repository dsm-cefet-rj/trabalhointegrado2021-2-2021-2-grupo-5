import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import {Provider, useDispatch} from 'react-redux';
import {store} from './store'


ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <Navbar/>
    <App />
    <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
