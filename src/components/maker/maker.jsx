import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = () => {
    //내가기억하고싶은 것 저장
    const [cards, setCards] = useState([
        {
            id:'1',
            name:'eunkyung1',
            title:'오늘OOO와 함께 인증샷',
            theme:'dark',
            message:'같이하는가치',
            fileName:'인증샷',
            fileURL: null
        },
        {
            id:'2',
            name:'eunkyung2',
            title:'오늘OOO와 함께 인증샷',
            theme:'light',
            message:'같이하는가치',
            fileName:'인증샷',
            fileURL: null
        },
        {
            id:'3',
            name:'eunkyung3',
            title:'오늘OOO와 함께 인증샷',
            theme:'colorful',
            message:'같이하는가치',
            fileName:'인증샷',
            fileURL: null
        }
    ]);
    const history = useHistory();

    const addCard = card => {
        const updated = [...cards, card];
        setCards(updated);
    }
    return(
        <section className={styles.maker}>
             <Header />
             <div className={styles.container}>
               <Editor cards={cards} addCard={addCard}/>
               <Preview cards={cards}/>
             </div>
            {/* <Footer /> */}
        </section>
    );
};

export default Maker;