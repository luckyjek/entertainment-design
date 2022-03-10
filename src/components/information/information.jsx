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
            <div className={styles.container}>
                <h1>Information</h1>
            </div>
            <section className={styles.styleGrid}></section>
            <Footer />
        </section>
    )
}

export default Information;