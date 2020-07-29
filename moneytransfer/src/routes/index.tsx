import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SendMoney from '../pages/SendMoney';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SendMoney} activeClassName="is-active" />
  </Switch>
);

export default Routes;
