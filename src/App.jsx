import './App.css';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Booking from './components/Booking';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
     <>
     <NavBar/>
      <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/booking' element={<Booking/>}></Route>
            <Route path='/home' element={<Home/>}></Route> 
     </Routes>
     </>
     
  );
}

export default App;
