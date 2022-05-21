import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myappointmnet = () => {
    const [appointments,setAppointments] = useState([]);
    const [user]  = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() =>{
        if (user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`,{
              method: 'GET', 
              headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            }) 
        .then(res=>{
          
          console.log('res', res);
          if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken');
            
            navigate('/');

          }
         
          return  res.json()})
        .then(data=> {
          
          setAppointments(data);});
        }
        
    },[user]
    
    )
  
    return (
        <div>
            my appointments:{appointments.length}
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>treatement</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((a,index)=>  <tr>
                <th>{index+1}</th>
                <td>{a.patient}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
         )
        }
      
      
 
      <tr class="active">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
    
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myappointmnet;