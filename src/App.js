import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/main/main';
import Info from './components/information/information';
import Card from './components/card/card';
import styles from './app.module.css';
import Investors from './components/investors/investors';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path={['/','/main']} exact>
            <Main />
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
