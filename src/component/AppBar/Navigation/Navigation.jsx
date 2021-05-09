import { NavLink } from 'react-router-dom';
import { navPath } from '../../../routes/routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      {navPath.map(({ id, exact, path, text }) => (
        <NavLink
          key={id}
          exact={exact}
          to={path}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          {text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
