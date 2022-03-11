import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileImput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css'

const CardAddForm = ({onAdd}) => {
const formRef = useRef();
const nameRef = useRef();
const titleRef = useRef();
const themeRef = useRef();
const messageRef = useRef();

  const onSubmit = (event)=>{
    event.preventDefault();
    const card = {
      id:Date.now(), //uuid
      name: nameRef.current.value || '',
      title: titleRef.current.value || '',
      theme: themeRef.current.value,
      message: messageRef.current.value || '',
      fileName:'',
      fileURL:'',
    };
    formRef.current.reset();
    onAdd(card);
  };
  return(
    <form ref={formRef} className={styles.form}>
      <input
      ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" />
      <input
      ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title" />
      <select
      ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <textarea
      ref={messageRef} className={styles.textarea} name="message" placeholder="Message"/>
      <div className={styles.fileInput}>
        <ImageFileImput />
      </div>
      <Button name='Add' onClick={onSubmit}/>
    </form>
  )
}
export default CardAddForm;
