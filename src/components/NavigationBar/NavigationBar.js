import styles from './NavigationBar.module.scss';
import Container  from '../Container/Container';
import { NavLink, Link } from 'react-router-dom';

const NavigationBar = () => {
  return(
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navWrapper}>
          <Link to='/'>
            <span className='fa fa-tasks'></span>
          </Link>
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/favorite'>Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/about'>About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
  )

}

export default NavigationBar;