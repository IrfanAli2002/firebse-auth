import { Box } from '@mui/material'
import React, { useState } from 'react'
import SmButton from '../Components/button'
import SmInput from '../Components/SmInput'
import '../App.css'
import { sendData, signUpUser } from '../config/firebase/firebasemethod'
import { useNavigate } from 'react-router-dom'

const SignUpUser = () => {

  const [userobj, setUserObj] = useState([])
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();

  let signUp = () => {
    if(!userobj.email){
      return alert("email is required")
    }
    if(!userobj.password || userobj.password.length < 6){
      return alert("password is required and password must be aleast seven character")
    }
    setLoader(true)
    console.log(userobj)
    signUpUser(userobj).then(
      (res)=>{
        setLoader(false)
        console.log(res)
        sendData(userobj,'user',res.user.uid).then(()=>{
          console.log('data transfer')
        }).catch((err)=>{
          console.log(err)
        })
        navigate(`/login`)
      }
    ).catch(err=>{
      setLoader(false)
      console.log(err)

    })
    
  }

  return (
    <>

      <Box className='MAin'>
        <Box className='shawdow'>
          <h1>Sign Up</h1>


          <Box sx={{ padding: 1 }}>
            <SmInput onChange={(e) => setUserObj({ ...userobj, name: e.target.value })} fullWidth={true} label='Name' type='text' />
          </Box>
          <Box sx={{ padding: 1 }}>
            <SmInput onChange={(e) => setUserObj({ ...userobj, email: e.target.value })} fullWidth={true} label='Email' type='email' required />
          </Box>
          <Box sx={{ padding: 1 }}>
            <SmInput onChange={(e) => setUserObj({ ...userobj, password: e.target.value })} fullWidth={true} label='Password' type='password' required />
          </Box>
          <Box sx={{ padding: 1 }}>
            <SmButton loading={loader} onClick={signUp} fullWidth={true} label='Sign Up' />
          </Box>
        </Box>

      </Box>





    </>


  )
}

export default SignUpUser