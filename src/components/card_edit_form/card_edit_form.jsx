import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileImput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css'

const CardEditForm = ({card, updateCard, deleteCard}) => {
  const nameRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();
  
  const {name, title, theme, message, fileName, fileURL}= card; 
  
  const onChange = (event)=>{
    if(event.currentTarget == null){
      return;
    }
    event.preventDefault()
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    updateCard({
      ...card,
      //key는 지금 발생하고있는 event의 currentTarget에 있는 이름을 쓰고,
      //value는 이벤트의 currentTarget에 있는 value를 쓸것이다.
      [event.currentTarget.name] : event.currentTarget.value,
    });

  }
  const onSubmit = (event)=>{
    deleteCard(card);
  };
  return(
    <form className={styles.form}>
      <input
      ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
      <input
      ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange}/>
      <select
      ref={themeRef} className={styles.select} name="theme" value={theme} onChange={onChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <textarea
      ref={messageRef} className={styles.textarea} name="message" value={message} onChange={onChange}/>
      <div className={styles.fileInput}>
        <ImageFileImput />
      </div>
      <Button name='Delete' onClick={onSubmit}/>
    </form>
  )
}
export default CardEditForm;
