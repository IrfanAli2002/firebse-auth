import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import PermanentDrawerLeft from '../component/drawer'



function Post() {
  const [apicall, setApiCall] = useState([])
  let onAPi  = ()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then((res) => setApiCall(res.data))
  }

  return (
    <>
      <PermanentDrawerLeft />

      <div className='MainFlex'>

        <h1>
         GET POSTS VALUE
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
          <p>{x.url}</p>
          </>
          )
        })}
        </div>
      </div>

    </>
  )
}

export default Post