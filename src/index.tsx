import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './pages/main';
import reportWebVitals from './reportWebVitals';

//const PagNotFound = () => (<div>Página 404</div>);

ReactDOM.render(
    <MainPage/>,
  document.getElementById('root')
);

reportWebVitals();
