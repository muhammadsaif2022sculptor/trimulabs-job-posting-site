import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from './components/Detail';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;