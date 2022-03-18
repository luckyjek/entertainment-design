import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({FileInput, authService, cardRepository}) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);
    
    const onLogout = () => {
        authService.logout();
    }
    //mount and change user
    useEffect(()=>{
        if(!userId){
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards =>{
            setCards(cards);
        })
        return () => stopSync();
    },[userId]);

    //login
    useEffect(()=>{
        authService.onAuthChange(user=>{
            if (user) {
                setUserId(user.uid);
            }else{
                history.push('/');
            }
        });
    });

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
          });
          cardRepository.saveCard(userId, card);
    }

    const deleteCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
          });
          cardRepository.romoveCard(userId, card);
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