import React from 'react';
import Button from '../button/button';
import ImageFileImput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css'

const CardEditForm = ({card}) => {
  const {name, title, theme, message, fileName, fileURL}= card; 
  const onSubmit = ()=>{};
  return(
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input className={styles.input} type="text" name="title" value={title} />
      <select className={styles.select} name={theme} value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <textarea className={styles.textarea} name="message" value={message}/>
      <div className={styles.fileInput}>
        <ImageFileImput />
      </div>
      <Button name='Delete' onClick={onSubmit}/>
    </form>
  )
}
export default CardEditForm;
