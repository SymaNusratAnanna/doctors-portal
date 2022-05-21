import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';



const Users = () => {
     const {data: users,isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user',
     {
        mehtod: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res=>res.json()));
    
    if(isLoading){
        return<Loading></Loading>
    }
    console.log(users);
    return (
        <div>
            <h2>ALL USERS :{users.length}</h2>
        

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
            users.map(user=><UserRow
            key={user._id} user={user}
            refetch={refetch}></UserRow>)
      }
       
       </tbody>
  </table>
</div>
        </div>
    
    
    );
};

export default Users;