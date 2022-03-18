import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './information.module.css';

const Information = props => {
    return(
        <section className={styles.info}>
            <Header />
            <span className={styles.container}></span>
            <div className={styles.styleGrid}></div>
            <Footer />
        </section>
    )
}

export default Information;