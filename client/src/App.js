import './App.css';
import Home from './pages/Home';
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route component={Home} exact path='/'/>
    </Switch>
  );
}

export default App;
