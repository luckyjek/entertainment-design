import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';
import styles from './editor.module.css';

const Editor = ({FileInput, cards, addCard, updateCard, deleteCard}) => (
       <section className={styles.editor}>
           <h1 className={styles.title}>Editor</h1>
           {/* cards는 배열이 아니므로, map할 수 있는 상태로 만들기위해 
           Object.key()를이용 ->cards라는 오브젝트 안에있는 모든 키들을 받아와서
           그 키를 빙글빙글 돌게할것이다.   */}
            {/* {cards.map(card => ( */}
            {Object.keys(cards).map(key => ( //1,2,3 받아와짐 
             <CardEditForm 
                key={key} 
                FileInput={FileInput}
                card={cards[key]}// cards안에있는 키를 접근
                updateCard={updateCard} 
                deleteCard={deleteCard}/>
            ))}
            <CardAddForm FileInput={FileInput} onAdd={addCard}/>
       </section>     
    );

export default Editor;