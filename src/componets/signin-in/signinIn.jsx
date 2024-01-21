import React, { useContext, useEffect, useState } from 'react'
import {
  Box, Stack,
  Typography,
  TextField, Button,
  IconButton,
  useMediaQuery,
} from '@mui/material'
import './signinIn.css'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { get_users } from '../../api/users';
import { AuthContext } from '../../authcontext';
import * as Tag from './styles/index'
import { IsMobile } from '../IsMobile';

export const SignIn = () => {
  const matches = useMediaQuery('max-width:800px)');
  const { user, loginWithEmailAndPassword, loginWithGoogle } = useContext(AuthContext);
  console.log(user)
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [abreSenha, setAbreSenha] = useState(false);
  const getUsers = async () => {
    try {
      setUsers(await get_users.user.get());
    } catch (error) {
      console.error('erro au pegar os usuários', error);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const validateForm = () => {
    clearErrors();
    let isValid = true;
    if (email === '') {
      setEmailError('O e-mail é obrigatório.');
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres.');
      isValid = false;
    }
    if (isValid) {
      alert('Formulário válido! Execute a lógica de autenticação aqui.');
    }
  };

  console.log(matches);

  const logarWithPassword = () => {
    loginWithEmailAndPassword(email, password)
  }
  return (
    <>
      <Box className="contante_laoder">
        <div className="loader"></div>
        <div>Logando...</div>
      </Box>

      <Tag.ContainerSignin>
        <Tag.ConatinerLogin>
          <Tag.LoginH4 matches={matches}>
            Faça login para garantir a sua segurança
          </Tag.LoginH4>
          <form id="loginForm">
            <Box sx={{
              width: ' 100%',
              borderRadius: '5px',
              outline: 'none',
              marginBottom: '2rem',

            }}>
              <TextField
                sx={{
                  width: ' 100%',
                  outline: 'none',
                  fontSize: '2.9rem'
                }}
                type="email"
                label="Digite seu e-mail..."
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => clearErrors()}
              />
              <Typography fontSize={'1.5rem'} color="error" id="emailError">
                {emailError}
              </Typography>
            </Box>



            <Box>
              <TextField
                sx={{
                  width: '100%',
                  borderRadius: '5px',
                  outline: 'none',
                  '& input::placeholder': {
                    fontSize: '2.5rem',
                    fontWeight: '600',
                  },
                }}
                type={abreSenha ? 'text' : 'password'}
                label="Digite uma senha de 6 dígitos..."
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onInput={clearErrors}
                InputProps={{
                  endAdornment: (
                    <Box>
                      <IconButton
                        onClick={() => setAbreSenha(!abreSenha)}
                      >
                        {abreSenha ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </Box>
                  ),
                }}
              />
            </Box>
            <Box
              sx={{

                marginBottom: '1rem',
                marginTop: '1rem',
                display: 'flex',
                fontSize: '1.5rem',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                color: '#ff7e00'
              }}
            >
              <Typography sx={{
                fontSize: '1.4rem',
                color: '#1a2428',
              }}>Já tem uma conta?</Typography>
              <li>
                <a className='linkCadastro' href="./cadastro.html">Cadastrar-se</a>
              </li>
            </Box>
            <Button
            fullWidth
              sx={{
                backgroundColor: 'var(--green-color)',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                borderRadius: '5px',
                '&:hover': {
                  backgroundColor: 'var(--orange-color)',
                },
              }}
              className="BotaoLogar"
              type="button"
              onClick={()=> logarWithPassword()}
            >
              Logar
            </Button>
          </form>
        </Tag.ConatinerLogin>
      </Tag.ContainerSignin>
    </>
  )
}
