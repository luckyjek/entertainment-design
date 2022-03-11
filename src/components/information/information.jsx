import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './information.module.css';

const Information = props => {
    const history = useHistory();
    return(
        <section className={styles.info}>
            <Header />
            <span className={styles.container}>
                <h1 className={styles.title}>Information</h1>
            </span>
            <div className={styles.styleGrid}></div>
            <Footer />
        </section>
    )
}

export default Information;