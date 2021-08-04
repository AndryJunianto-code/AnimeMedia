import './App.css';
import Home from './pages/Home';
import Detailed from './pages/Detailed';
import Navbar from './components/Navbar'
import {Switch,Route} from 'react-router-dom'
import SceneTracker from './pages/SceneTracker'
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route component={Home} exact path='/'/>
      <Route component={Detailed} path='/anime/:id'/>
      <Route component={SceneTracker} path='/scenetracker'/>
    </Switch>
    </>
  );
}

export default App;
