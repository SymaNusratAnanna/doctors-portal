
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointmment from './Pages/Appointment/Appointmment';
import Login from './Pages/Login/Login';
import Banner from './Pages/Home/Banner/Banner';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointmment />} />
        <Route path="/login" element={<Login />} />
        
        
        <Route path="/banner" element={<Banner />} />
        

      </Routes>
    </div>
  );
}

export default App;
