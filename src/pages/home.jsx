import React, { useState } from 'react'
import './home.css'
import { TextField, Typography, Stack, Box } from '@mui/material'
import  {ShoppingItems} from '../shoppingItems/shoppingItems'
import { MyFooter } from '../componets/footer/Footer'
import { SignIn } from '../componets/signin-in/signinIn'
import { SignUp } from '../componets/signUp/signUp'

export const MyHome = () => {
  
  return (
    <>
      <Stack
        sx={{
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#fff',
          // background: 'red',
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
      
    
   
        <ShoppingItems/>
       {/* <SignIn/>
        <SignUp/> */}
        <h2>Ola mundo!!</h2>
        <MyFooter/>
      </Stack>
    </>
  )
}
