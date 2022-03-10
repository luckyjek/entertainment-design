import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown.js/dropdown';
import styles from './header.module.css';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
          setDropdown(true);
      };
    const onMouseLeave = () => {
        setDropdown(false);
    };
    return(
        <>
            {/* <header className={styles.header}> */}
                <nav className={styles.navbar} >    
                    <Link to={`/main`} className={styles.fild}>
                        <img className={styles.logo} src="/images/logo.png" alt="logo" />
                        <h1 className={styles.title}>Entertainment Desing</h1>
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>    

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className={styles.navItem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                            <Link to={`/info`} className={`${styles.navItem}`} onClick={closeMobileMenu} >INFORMATION <i className='fas fa-caret-down' />  / </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className={styles.navItem}>
                            <Link to={`/investors`} className={styles.navItem}> INVESTORS / </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to={`/card`} className={styles.navItem}> MAKE CARD</Link>
                        </li>
                    </ul>
                </nav>
            {/* </header> */}
        </>
    )
}
export default Header;