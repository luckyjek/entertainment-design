import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown.js/dropdown';
import styles from './header.module.css';

const Header = () => {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
          setDropdown(true);
      };
    
    const onMouseLeave = () => {
        setDropdown(false);
    };
    return(
        <>
            <header className={styles.header}>
                <Link to={`/main`} className={styles.fild}>
                    <img className={styles.logo} src="/images/logo.png" alt="logo" />
                    <h1 className={styles.title}>Entertainment Desing</h1>
                </Link>
                <nav>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link to={`/info`} className={`${styles.navItem}`}>INFORMATION <i className='fas fa-caret-down' />  / </Link>
                            {dropdown && <Dropdown />}
                            {/* {dropdown && console.log('통과')} */}
                        </li>
                        <li className={styles.navItem}>
                            <Link to={`/investors`} className={styles.navItem}> INVESTORS / </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to={`/card`} className={styles.navItem}> MAKE CARD</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;