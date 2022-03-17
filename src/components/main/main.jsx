import React from 'react';

import { Link } from 'react-router-dom';
import styles from './main.module.css';

const MainItem = () => {
    return(
        <div className={styles.video}>
           <iframe 
            className={styles.thumbnail}
            title="video.title"
            type="text/html" 
            width="100%" 
            height="100vh"
            // src="https://www.youtube.com/embed/6PmRRLrLDwQ?mute=1&autoplay=1"
            src="https://www.youtube.com/embed/6PmRRLrLDwQ?autoplay=1"
            allow="autoplay"
            frameBorder="0" 
            allowFullScreen
            ></iframe>
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