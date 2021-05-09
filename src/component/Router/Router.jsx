import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '../../routes/routes';

const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        {routes.map(({ id, exact, path, component }) => (
          <Route key={id} exact={exact} path={path} component={component} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Router;
