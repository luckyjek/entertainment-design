import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({authService}) =>{
    const history = useHistory();
    const goToMaker = (userId) =>{
        history.push({
            pathname:'/maker',
            state:{id:userId},
        });
    };
    const goHome = () =>{
        history.push({
            pathname:'/',
        })
    }
    const onLogin = event =>{
        authService//
        .login(event.currentTarget.value)
        .then(data=>goToMaker(data.user.uid));
    }
    useEffect(()=>{
        authService
        .onAuthChange(user =>{
            user && goToMaker(user.uid);
        });
    })
    return(
        <section className={styles.login}>
            <section>
                <h1 className={styles.simple}>간편인증</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={`${styles.button} ${styles.google}`} onClick={onLogin} value='Google'>
                            <i className="fa-brands fa-google"></i>
                        </button>
                        <div >
                            Google
                        </div>
                    </li>
                    <li className={styles.item}>
                        <button  className={`${styles.button} ${styles.github}`} onClick={onLogin} value='Github' >
                            <i className="fa-brands fa-github" ></i>
                        </button>
                        <div >
                            Github
                        </div>
                    </li>
                </ul>
                <button className={`${styles.button} ${styles.home}`} onClick={goHome}>Go Home</button>
            </section>
        </section>
    )
}

export default Login;