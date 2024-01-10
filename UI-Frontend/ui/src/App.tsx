import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import UserHome from '../src/pages/UserHome/UserHome'
import Cart from './pages/Cart/Cart';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route  path='/' element={<Home />}/>
         <Route  path='/main' element={<UserHome />}/>
         <Route  path='/cart' element={<Cart />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
