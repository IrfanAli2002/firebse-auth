
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import PermanentDrawerLeft from '../component/drawer';
import Button from '@mui/material/Button';
import axios from 'axios';





const Dashboard = () => {
  const [apicall,setApiCall] = useState([]);
  let onAPi  = ()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then((res) => setApiCall(res.data))
  }

  return (
    <> 
    
      <PermanentDrawerLeft />
      <div className='MainFlex'>
        <h1>
            welcome 
        </h1>
        
             </div>

        <Outlet/>
    </>

  )
}


export default Dashboard