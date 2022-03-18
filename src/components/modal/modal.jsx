import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './modal.module.css';

const Modal = (props) => {
    const history = useHistory();
    return(
    <>
        <div className={styles.modal}>
        <div className={styles.attention}>⚠️</div>
        <h2 className={styles.ready}>
        {props.name} Page<br/>
        서비스 준비중 입니다.</h2>
        <div className={styles.homeBtn}>
            <button className={styles.button} onClick={() => {
                history.push('/info');
             }}>
                Go Infomation
            </button>
        </div>
        </div>
    </>   
    )              
};
export default Modal;