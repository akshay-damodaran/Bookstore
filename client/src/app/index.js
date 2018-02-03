/* global window */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import store from './store';
import Login from './containers/Login';
import Homepage from './containers/Homepage';
import BuyPage from './containers/BuyPage';
import SellHomepage from './containers/SellHomepage';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/auth" component={Login} />
        <Route path="/buy" component={BuyPage} />
        <Route path="/sell" component={SellHomepage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  window.document.getElementById('app'),
);
