
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Registration from './component/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
 

  return (
    < div className="wrapper">
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/" element={<Registration/>}/>
        </Routes>
            
            
      </Router>
    
    </div>
  );
}

export default App;
