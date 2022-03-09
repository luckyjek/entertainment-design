import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './components/main/main';
import Info from './components/information/information';
import Card from './components/card/card';
import Investors from './components/investors/investors';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=bts&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);


  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path={['/','/main']} exact>

              <Main videos={videos}/>

          </Route>
          <Route path='/info'>
            <Info />
          </Route>
          <Route path='/investors'>
            <Investors />
          </Route> 
          <Route path='/card'>
            <Card />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
