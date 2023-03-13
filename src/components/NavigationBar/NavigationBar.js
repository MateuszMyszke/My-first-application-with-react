import styles from './NavigationBar.module.scss';
import Container  from '../Container/Container';

const NavigationBar = () => {
  return(
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navWrapper}>
          <a href='/'>
            <span className='fa fa-tasks'></span>
          </a>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/favorite'>Favorite</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )

}

export default NavigationBar;