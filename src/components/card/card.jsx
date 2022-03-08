import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './card.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Card = () => {
    const history = useHistory();
    return(
        <section className={styles.card}>
             <Header />
             <div className={styles.container}>
               <Editor />
               <Preview />
             </div>
            <Footer />
        </section>
    );
};

export default Card;