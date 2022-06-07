import { Box } from '@mui/material'
import React, { useState } from 'react'
import SmButton from '../Components/button'
import SmInput from '../Components/SmInput'
import '../App.css'
import { logInUser } from '../config/firebase/firebasemethod'
import { useNavigate } from 'react-router-dom'

const LoginUser = () => {

    const [userobj, setUserObj] = useState([])
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    let login = () => {
        if (!userobj.email) {
            return alert("email is required")
        }
        if (!userobj.password || userobj.password.length < 6) {
            return alert("password is required password must be atleast 6 characters")
        }
        setLoader(true)
        console.log(userobj)
        logInUser(userobj).then(success => {
            setLoader(false)
            console.log("user agya")
            
            navigate(`/home${(success.user.uid)}`).then((sucess)=>{
                console.log("hence done")
            })

        }).catch((err) => {
            setLoader(false)

            console.log(err)
        })

    }




    return (
        <>
            <Box className='MAin'>
                <Box className='shawdow'>
                    <h1>LOG IN</h1>


                    <Box sx={{ padding: 1 }}>
                        <SmInput onChange={(e) => setUserObj({ ...userobj, email: e.target.value })} fullWidth={true} label='Email' type='email' required />
                    </Box>
                    <Box sx={{ padding: 1 }}>
                        <SmInput onChange={(e) => setUserObj({ ...userobj, password: e.target.value })} fullWidth={true} label='Password' type='password' required />
                    </Box>
                    <Box sx={{ padding: 1 }}>
                        <SmButton loading={loader} onClick={login} fullWidth={true} label='log In' />
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default LoginUser