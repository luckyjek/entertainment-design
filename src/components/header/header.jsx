import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
    const history = useHistory();
    return(
        <>
            <header className={styles.header}>
                <Link to={`/main`} className={styles.fild}>
                    <img className={styles.logo} src="/images/logo.png" alt="logo" />
                    <h1 className={styles.title}>Entertainment Desing</h1>
                </Link>
                <nav className={styles.nav}>
                    <Link to={`/info`} className={styles.navItem}>INFORMATION / </Link>
                    <Link to={`/investors`} className={styles.navItem}>INVESTORS / </Link>
                    <Link to={`/card`} className={styles.navItem}>MAKE CARD</Link>
                </nav>
            </header>
        </>
    )
}
export default Header;