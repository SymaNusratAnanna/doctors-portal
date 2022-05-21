import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin ] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
 <h2 className='text-2xl font-bold text-purple-500'>Welcome to ypur Dashboard</h2>
      <Outlet></Outlet>
    
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    
      <li><Link to="/dashboard">My Appoinments</Link></li>

      <li><Link to= "/dashboard/review">My Review</Link></li>
      <li><Link to= "/dashboard/histry">My Histry</Link></li>
      { admin && <li><Link to= "/dashboard/users">All User</Link></li>}
    </ul>
  
  </div>
  <div className='navbar-end'>
  <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div>

</div>
    );
};

export default Dashboard;