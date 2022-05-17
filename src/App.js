
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointmment from './Pages/Appointment/Appointmment';
import Login from './Pages/Login/Login';
import Banner from './Pages/Home/Banner/Banner';
import AppointmentPage from './Pages/Appointmentpage/Appointmentpage';
import SignUp from './Pages/Login/SignUp';
import RequiredAuth from './Pages/Login/RequiredAuth';

import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointmment />} />
        <Route path="/appointmentpage" element={<RequiredAuth><AppointmentPage /></RequiredAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        
        
        <Route path="/banner" element={<Banner />} />

        

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
