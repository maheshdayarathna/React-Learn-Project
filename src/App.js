
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Items from './Pages/Items';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route  path="/">
            <Home/>
          </Route>
 
        

        </Switch>
      </div>
    </Router>
  );
}

export default App;
