import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';

import routes from './configs/routes';

function App() {
  return (
    <>
      <Switch>
        <Route exact path={routes.MAIN} component={MainPage} />
        <Route exact path={routes.USERS} component={UsersPage} />
        <Route exact path={routes.USER} component={UserPage} />
        <Redirect to={routes.MAIN} />
      </Switch>
    </>
  );
}

export default App;
