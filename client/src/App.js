import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import MainPage from "./pages/MainPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";

import routes from "./configs/routes";

function App() {
  return (
    <>
      <AppHeader />

      <main>
        <Switch>
          <Route exact path={routes.MAIN} component={MainPage} />
          <Route exact path={routes.USERS} component={UsersPage} />
          <Route exact path={routes.USER} component={UserPage} />
          <Redirect to={routes.MAIN} />
        </Switch>
      </main>
    </>
  );
}

export default App;
