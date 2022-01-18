import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import { BasketContextProvider } from '../../BasketContext';
import Basket from '../Basket/Basket';
import Login from '../Login/Login';

function App() {
  return (
    <BasketContextProvider>
      <div className="app-wrapper">
        <header className="app-header"></header>
        <Switch>
          <Route exact path='/' render={() => <Redirect to={'/basket'}/>}/>
          <Route path='/basket' render={() => <Basket/>}/>
          <Route path='/login' render={() => <Login />}/>
          <Route path='*' render={() => <div>404 Not found</div>}/>
        </Switch>
      </div>
    </BasketContextProvider>
  );
}

export default App;
