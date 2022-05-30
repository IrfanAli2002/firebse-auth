
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import PermanentDrawerLeft from '../component/drawer';
import Button from '@mui/material/Button';
import axios from 'axios';





const Todo = () => {
  const [apicall,setApiCall] = useState([]);
  let onAPi  = ()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((res) => setApiCall(res.data))
  }
   


  return (
    <>
      <PermanentDrawerLeft />
      <div className='MainFlex'>
        <h1>
            GET TODOS VALUE
        </h1>
        
        <Button
        onClick={onAPi}
        variant="outlined" color="primary">
        GET
      </Button>
      <div className='h'>
        
        {apicall.map ((x) =>{
          return(
            
            <>
          <p>{x.title}</p>
          </>
            )
          })}
          </div>

        </div>


    </>

  )
}


export default Todo