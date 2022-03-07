import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/main';
import Info from './components/information';
import Card from './components/card';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/','/main']} exact>
          <Main />
        </Route>
        <Route path='/info'>
          <Info />
        </Route>
        {/* 
        <Route path='/investors'>
          <Investors />
        </Route> 
        */}
        <Route path='/card'>
          <Card />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
