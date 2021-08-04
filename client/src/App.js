import './App.css';
import Home from './pages/Home';
import Detailed from './pages/Detailed';
import Navbar from './components/Navbar'
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route component={Home} exact path='/'/>
      <Route component={Detailed} path='/anime/:id'/>
    </Switch>
    </>
  );
}

export default App;
