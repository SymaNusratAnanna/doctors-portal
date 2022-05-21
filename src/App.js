
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
import Dashboard from './Pages/Dashboard/Dashboard';
import Myappointmnet from './Pages/Dashboard/Myappointmnet';
import Myreview from './Pages/Dashboard/Myreview';
import Myhistry from './Pages/Dashboard/Myhistry'
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointmment />} />
        <Route path="/appointmentpage" element={<RequiredAuth><AppointmentPage /></RequiredAuth>} />
        <Route path="/appointment" element={<Appointmment />} />
        <Route path="/dashboard" element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>} >
          <Route index element={<Myappointmnet></Myappointmnet>}></Route>
          <Route path="review" element={<Myreview></Myreview>} ></Route>
          <Route path="histry" element= {<Myhistry></Myhistry>}></Route>
          <Route path="users" element= {<Users></Users>}></Route>
          
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        
        
        <Route path="/banner" element={<Banner />} />

        

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
