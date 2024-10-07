import './App.css';
import Home from './Pages/Home';
import Items from './Pages/Items';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          {/* Example:
          <Route path="/items" element={<Items />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
