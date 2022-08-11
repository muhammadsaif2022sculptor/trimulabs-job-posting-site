import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from './components/Detail';
import { useState } from 'react';
import { useGetAllJobs } from './Apollo/Queries';
import Loading from './components/Loading';

function App() {

  const {loading, data} = useGetAllJobs()
  const [jobs, setJobs] = useState([])
  
  if(loading) return <Loading />

  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path="/" element={<Home data={data} jobs={jobs} setJobs={setJobs}/>} />
          <Route exact path="/detail/:companySlug/:jobSlug" element={<Detail />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;