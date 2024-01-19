import React, { useState } from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import './signinIn.css'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const validateForm = () => {
    clearErrors()

    let isValid = true

    if (email === '') {
      setEmailError('O e-mail é obrigatório.')
      isValid = false
    }

    if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres.')
      isValid = false
    }

    if (isValid) {
      // Continue with the authentication logic
      // ...

      // Example: Simulate a loading state
      alert('Form is valid! Perform authentication logic here.')
    }
  }

  return (
    <>
      <Box className="contante_laoder">
        <div className="loader"></div>
        <div>Logando...</div>
      </Box>

      <Stack className="container_form">
        <Stack className="conatiner-login">
          <Typography variant="h4">
            Faça login para garantir a sua segurança
          </Typography>
          <form id="loginForm">
            <Box>
              <TextField
                type="email"
                label="Digite seu e-mail..."
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => clearErrors()}
              />
              <Typography color="error" id="emailError">
                {emailError}
              </Typography>
            </Box>

            <Box>
              <TextField
                sx={{
                  width: ' 100%',

                  borderRadius: '5px',
                  //   border:' 1px solid var(--green-color)',
                  outline: 'none',
                }}
                type="password"
                label="Digite uma senha de 6 dígitos..."
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onInput={() => {
                  clearErrors()
                  // You may call your password strength checking function here
                }}
              />
              <Typography color="error" id="passwordError">
                {passwordError}
              </Typography>
            </Box>

            <Box
              sx={{
                bgcolor: 'red',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <Typography>Já tem uma conta?</Typography>
              <li>
                <a href="./cadastro.html">Cadastrar-se</a>
              </li>
            </Box>

            <Button
              sx={{
                backgroundColor: 'var(--green-color)',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                cursor: 'pointer',
                borderRadius: '5px',
                '&:hover': {
                  backgroundColor: 'var(--orange-color)',
                },
              }}
              className="BotaoLogar"
              type="button"
              onClick={validateForm}
            >
              Logar
            </Button>
          </form>
        </Stack>
      </Stack>
    </>
  )
}
