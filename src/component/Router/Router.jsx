import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '../../routes/routes';

const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        {routes.map(rout => (
          <Route
            key={rout.id}
            exact={rout.exact}
            path={rout.path}
            component={rout.component}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Router;
