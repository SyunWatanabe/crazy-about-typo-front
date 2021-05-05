import React, { VFC } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/pages/Home";
import Typo from "../components/pages/Typo";
import HeaderLayout from "../components/templates/layout/HeaderLayout";
import Page404 from "../components/pages/Page404";

const Router: VFC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HeaderLayout>
          <Home />
        </HeaderLayout>
      </Route>
      <Route path="/typos">
        <HeaderLayout>
          <Typo />
        </HeaderLayout>
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

export default Router;
