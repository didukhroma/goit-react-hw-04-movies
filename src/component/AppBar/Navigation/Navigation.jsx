import { NavLink } from 'react-router-dom';
import { navPath } from '../../../routes/routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      {navPath.map(item => (
        <NavLink
          key={item.id}
          exact={item.exact}
          to={item.path}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          {item.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
