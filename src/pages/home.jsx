import React, { useState } from 'react'
import './home.css'
import { TextField, Typography, Stack, Box } from '@mui/material'

export const MyHome = () => {
  
  return (
    <>
      <Stack
        sx={{
          minHeight: '100vh',
          width: '100%',
            // padding: '5rem 9% 2rem',
          backgroundColor: '#081b29',

          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'colunm',
          // gap: '5rem',

          '@media only screen and (max-width: 800px)': {
            width: '100%',
            position: 'relative',
          },
        }}
      >
      
    
        <h2>Ola mundo!!</h2>
      </Stack>
    </>
  )
}
