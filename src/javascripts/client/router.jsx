import React from 'react';
import {Router, browserHistory, Route} from 'react-router';

import AppRoot from 'client/app-root';
import Home from 'client/home';
import List from 'client/list';


const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppRoot}>
        <Route path="/home" component={Home}/>
        <Route path="/list" component={List}/>
      </Route>
    </Router>
  );
};

export default AppRouter;
