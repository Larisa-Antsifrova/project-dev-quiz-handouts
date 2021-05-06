import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';

import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Container>
        <NavLink to={'/'} className={styles.link}>
          Home
        </NavLink>
        <NavLink to={'/list'} className={styles.link}>
          Statistics
        </NavLink>
        <NavLink to={'/user'} className={styles.link}>
          Info
        </NavLink>
      </Container>
    </nav>
  );
}
