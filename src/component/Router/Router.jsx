import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '../../routes/routes';

const Router = () => {
  return (
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
  );
};

export default Router;
