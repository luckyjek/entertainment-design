import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({FileInput, authService}) => {
    const history = useHistory();
    const onLogout = () => {
        console.log('ddd');
        authService.logout();
        
    }
    useEffect(()=>{
        authService.onAuthChange(user=>{
            if (!user) {
                history.push('/');
            }
        });
    });
    const [cards, setCards] = useState({
    // '1':  {
    // id:'1',
    // name:'eunkyung1',
    // title:'오늘OOO와 함께 인증샷',
    // theme:'dark',
    // message:'같이하는가치',
    // fileName:'인증샷',
    // fileURL: null
    // },
    // '2':{
    //     id:'2',
    //     name:'eunkyung2',
    //     title:'오늘OOO와 함께 인증샷',
    //     theme:'light',
    //     message:'같이하는가치',
    //     fileName:'인증샷',
    //     fileURL: null
    // },
    // '3':   
    // {
    //     id:'3',
    //     name:'eunkyung3',
    //     title:'오늘OOO와 함께 인증샷',
    //     theme:'colorful',
    //     message:'같이하는가치',
    //     fileName:'인증샷',
    //     fileURL: null
    // }
    });

    const createOrUpdateCard = card => {
        const updated = {...cards};
        updated[card.id] = card;
        setCards(updated);
    }

    const deleteCard = card => {
        const updated = {...cards};
        delete updated[card.id];
        setCards(updated);
    }
    return(
        <section className={styles.maker}>
             <Header className={styles.header} onLogout={onLogout}/>
             <div className={styles.container}>
               <Editor 
                FileInput={FileInput} 
                cards={cards} 
                addCard={createOrUpdateCard} 
                updateCard={createOrUpdateCard} 
                deleteCard={deleteCard}
              />
               <Preview cards={cards}/>
             </div>
        </section>
    );
};

export default Maker;