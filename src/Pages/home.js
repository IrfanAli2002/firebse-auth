import { Box, Drawer, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../config/firebase/firebasemethod'

function Home() {

  const param = useParams();


  useEffect(() => {
  if(param.id){
    getData("user")
    console.log("fnanfan")
  }
  }, [])



  return (
    <>
    <Box>
   <Drawer/>
      
    </Box>
    </>
  )
}

export default Home