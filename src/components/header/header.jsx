import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/dropdown';
import styles from './header.module.css';

const Header = ({onLogout}) => {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
          setDropdown(true);
      };
    
    const onMouseLeave = () => {
        setDropdown(false);
    };
    // const onToogle = ()=>{
    //     console.log('hi')
    // }
    return(
        <>
            <header className={styles.header}>
                <div className={styles.containerNav}>
                    <Link to={`/main`} className={styles.fild}>
                        <img className={styles.logo} src="/images/logo.png" alt="logo" />
                        <h1 className={styles.title}>Entertainment Desing</h1>
                    </Link>
                        <ul className={styles.ul}>
                            <li className={`nav-item ${styles.navItem}`}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link to={`/info`} className={`${styles.navItem}`}>INFORMATION<br/> Dropdown <i className='fas fa-caret-down' />   </Link>
                                {dropdown && <Dropdown />}
                            </li>
                            <li className={styles.navItem}>
                                <Link to={`/investors`} className={styles.navItem}> INVESTORS  </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link to={`/login`} className={styles.navItem}> MAKE CARD</Link>
                            </li>
                            {onLogout && <button className={`${styles.logout} ${styles.navItem}`}onClick={onLogout}>Logout</button>}
                        </ul>
              
                </div>
            </header>
            {/* <button className={styles.toogle} onClick={onToogle}> */}
            <button className={styles.toogle}>
                <i className="fas fa-bars" aria-hidden="true"></i>
            </button>
        </>
    )
}
export default Header;