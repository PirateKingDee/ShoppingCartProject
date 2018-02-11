import { Router, Route, browserHistory } from 'react-router';
import React from 'react';

import ShoppingPage from '/imports/ui/pages/shopping/ShoppingPage.jsx';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={ShoppingPage} />
  </Router>
);
