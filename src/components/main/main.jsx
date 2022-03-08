import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './main.module.css';

const Main = props => {
    const history = useHistory();
    return(
        <section className={styles.main}>
            <Link to={`/info`} className={styles.fild}>
                <img className={styles.logo} src="/images/goInfo.png" alt="logo" />
                
            </Link>
            <div className={styles.container}>
                <h1>Main</h1>
            </div>
        </section>
    );
};

export default Main;