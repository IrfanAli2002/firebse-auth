
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import PermanentDrawerLeft from '../component/drawer';
import Button from '@mui/material/Button';
import axios from 'axios';





const User = () => {
  const [apicall,setApiCall] = useState([]);
  let onAPi  = ()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => setApiCall(res.data))
  }

   


  return (
    <>
      <PermanentDrawerLeft />
      <div className='MainFlex'>
        <h1>
            GET USER VALUE
        </h1>
        
        <Button
        onClick={onAPi}
        variant="outlined" color="primary">
        GET
      </Button>
      <div className='h'>

        {apicall.map ((x) =>{
          return(
            
            <div className=''>
          <p>{x.email}</p>
          </div>
            )
          })}
          </div>

        </div>
        <Outlet/>

    </>

  )
}


export default User