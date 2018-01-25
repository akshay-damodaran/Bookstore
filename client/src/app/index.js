/* global window */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import store from './store';
import Login from './containers/Login';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Login} />
        <Redirect to="/auth" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  window.document.getElementById('app'),
);
