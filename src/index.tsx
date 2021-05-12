import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const PagNotFound = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={PagNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
