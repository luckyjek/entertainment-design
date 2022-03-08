import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './header.module.css';


const Header = () => {
    const history = useHistory();
    return(
        <>
            <header className={styles.header}>
                <div className={styles.fild}>
                    <img className={styles.logo} src="/images/logo.png" alt="logo" />
                    <h1 className={styles.title}>Enteltainment Desing</h1>
                </div>
                <nav className={styles.nav}>
                    <Link to={`/info`} className={styles.navItem}>INFORMATION | </Link>
                    <Link to={`/info`} className={styles.navItem}>INVESTORS | </Link>
                    <Link to={`/card`} className={styles.navItem}>MAKE CARD</Link>
                </nav>
            </header>
        </>
    )
}
export default Header;