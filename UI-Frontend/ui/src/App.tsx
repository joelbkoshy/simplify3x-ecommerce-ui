import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import UserHome from '../src/pages/UserHome/UserHome'



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route  path='/' element={<Home />}/>
         <Route  path='/main' element={<UserHome />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
