import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './components/main/main';
import Info from './components/information/information';
import Investors from './components/investors/investors';
import styles from './app.module.css';
import Consulting from './components/pages/consulting';
import Marketing from './components/pages/marketing';
import Design from './components/pages/design';
import Maker from './components/maker/maker';
import Login from './components/login/login';

function App({FileInput, authService, cardRepository}) {
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
          <Route path='/login'> 
              <Login authService={authService}/>
          </Route>
          <Route path='/maker'>
              <Maker  
                FileInput={FileInput} 
                authService={authService}
                cardRepository={cardRepository}
              />
          </Route>
          <Route path='/info' component={Info} />
          <Route path='/investors' component={Investors} />
          <Route path='/consulting'component={Consulting} />
          <Route path='/marketing' component={Marketing} /> 
          <Route path='/design' component={Design} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
