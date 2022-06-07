import { Button } from '@mui/material'
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';



const SmButton = (props) => {
  const { label, onClick,fullWidth,loading,disabled } = props
  return (
    <>
      <Button
        variant='contained'
        onClick={onClick}
        fullWidth={fullWidth}
        disabled={disabled || loading}





      >
        {loading && <CircularProgress/>}
        {label}
      </Button>

    </>
  )
}

export default SmButton