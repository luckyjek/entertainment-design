import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.css';

const MainItem = ({video}) => {
    return(
        <div className={styles.video}>
            {/* <img className={styles.thumbnail} src={video.snippet.thumbnails.high.url}
            alt="video thumbnail" /> */}
            {/* 0. props로 사용한다.
                1. 10초뒤에 순서대로 바뀐다. 
                2. 만약, 클릭 ->  다른 탭이 열리며 유튜브로 이동된다. 
            */}
           <iframe 
            className={styles.thumbnail}
            title="video.title"
            type="text/html" 
            width="100%" 
            height="100vh"
            src="https://www.youtube.com/embed/6PmRRLrLDwQ"
            frameBorder="0" 
            allowFullScreen></iframe>
        </div>
    );
};

const Main = (props)=> {
    return(
        <section className={styles.main}>
            <Link to={`/info`} className={styles.fild}>
                <img className={styles.logo} src="/images/goInfo.png" alt="logo" />
            </Link>
            <div className={styles.container}>
                {props.videos.map(video => (
                <MainItem key={video.id.videoId} video={video} />
                ))}
            </div>
        </section>
    );
};

export default Main;