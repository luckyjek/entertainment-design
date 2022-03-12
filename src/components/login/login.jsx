import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) =>{
    const history = useHistory();
    const goToMaker = (userId) =>{
        history.push({
            pathname:'/maker',
            state:{id:userId},
        });
    };
    const onLogin = event =>{
        authService//
        .login(event.currentTarget.textContent)
        .then(data=>goToMaker(data.user.uid));
    }
    // const history = useNavigate();

    // };
    useEffect(()=>{
        authService
        .onAuthChange(user =>{
            user && goToMaker(user.uid);
        });
    })
    return(
        <section className={styles.login}>
            <section>
                <h1>Login후, 이용할 수 있는 서비스입니다 🥰 </h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                        Google
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                        Github
                        </button>
                    </li>
                </ul>
            {/* <Footer/> */}
            </section>
        </section>
    )
}

export default Login;