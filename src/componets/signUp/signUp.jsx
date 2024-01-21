
import React, { useState } from 'react';
import './stalys/signUp.css';
import {
    Box,
    Stack,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton,
  } from '@mui/material';
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        password: '',
        confirmPassword: '',
        cpf: '',
        email: '',
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        password: '',
        confirmPassword: '',
        cpf: '',
        email: '',
    });

    const handleInputChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
        setFormErrors({ ...formErrors, [`${fieldName}Error`]: '' });
    };

    const clearErrors = () => {
        setFormErrors({
            fullName: '',
            password: '',
            confirmPassword: '',
            cpf: '',
            email: '',
        });
    };

    const displayError = (fieldName, message) => {
        setFormErrors({ ...formErrors, [fieldName]: message });
    };

    const validateForm = () => {
        clearErrors();

        if (formData.fullName.trim() === '' || formData.fullName.split(' ').length < 2) {
            displayError('fullName', 'Por favor, digite seu nome completo.');
        }

        if (formData.password.length < 6) {
            displayError('password', 'A senha deve ter pelo menos 6 dígitos.');
        }

        if (formData.password !== formData.confirmPassword) {
            displayError('confirmPassword', 'As senhas não coincidem.');
        }

        if (formData.email.trim() === '' || !isValidEmail(formData.email)) {
            displayError('email', 'Por favor, digite um e-mail válido.');
        }

        if (formData.cpf.trim() === '' || !validarCPF(formData.cpf)) {
            displayError('cpf', 'Por favor, digite um CPF válido.');
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validarCPF = (cpf) => {
        

        // Remover caracteres não numéricos
        cpf = cpf.replace(/\D/g, '');

        // Verificar se o CPF tem 11 dígitos
        if (cpf.length !== 11) {
            return false;
        }

        // Calcular o primeiro dígito verificador
        let total = 0;
        for (let i = 0; i < 9; i++) {
            total += parseInt(cpf[i]) * (10 - i);
        }
        let resto = total % 11;
        let digito1 = resto > 1 ? 11 - resto : 0;

        // Calcular o segundo dígito verificador
        total = 0;
        for (let i = 0; i < 10; i++) {
            total += parseInt(cpf[i]) * (11 - i);
        }
        resto = total % 11;
        let digito2 = resto > 1 ? 11 - resto : 0;

        // Verificar se os dígitos verificadores estão corretos
        return (parseInt(cpf[9]) === digito1 && parseInt(cpf[10]) === digito2);



    };

    return (
        <>
            {/* Loader section */}
            <Box className="contante_laoder">
                <div className="loader"></div>
                <div>Logando...</div>
            </Box>
            {/* Form section */}
            <Stack className="container_form">
                <Stack className="conatiner-login">
                    <Typography variant="h4">
                        Inscreva-se no site
                    </Typography>
                    <form id="loginForm">

                        {/* Full Name */}
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

                                type="text"
                                label="Digite seu nome completo..."
                                variant="outlined"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                onFocus={clearErrors}
                            />
                            <Typography fontSize={'1.5rem'} color="error" id="fullNameError">
                                {formErrors.fullName}
                            </Typography>
                        </Box>

                        <Box sx={{
                            width: '100%',
                            borderRadius: '5px',
                            outline: 'none',
                            marginBottom: '2rem',
                        }}>
                            <TextField
                                sx={{
                                    width: '100%',
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '2.9rem',

                                }}
                                type={showPassword ? 'text' : 'password'}
                                label="Digite uma senha de 6 dígitos..."
                                variant="outlined"
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                onFocus={clearErrors}
                                InputProps={{
                                    endAdornment: (
                                        <Box>
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                              
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </Box>
                                    ),
                                }}
                            />
                            <Typography fontSize={'1.5rem'} color="error" id="passwordError">
                                {formErrors.password}
                            </Typography>
                        </Box>

                        {/* Confirm Password */}
                        <Box sx={{
                            width: '100%',
                            borderRadius: '5px',
                            outline: 'none',
                            marginBottom: '2rem',
                        }}>
                            <TextField
                                sx={{
                                    width: '100%',
                                    outline: 'none',
                                    fontSize: '2.9rem',
                                }}
                                type={showConfirmPassword ? 'text' : 'password'}
                                label="Confirme a sua senha..."
                                variant="outlined"
                                value={formData.confirmPassword}
                                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                onFocus={clearErrors}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Typography fontSize={'1.5rem'} color="error" id="confirmPasswordError">
                                {formErrors.confirmPassword}
                            </Typography>
                        </Box>

                        {/* CPF */}
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

                                type="text"
                                label="Digite seu CPF..."
                                variant="outlined"
                                value={formData.cpf}
                                onChange={(e) => handleInputChange('cpf', e.target.value)}
                                onFocus={clearErrors}
                            />
                            <Typography fontSize={'1.5rem'} color="error" id="cpfError">
                                {formErrors.cpf}
                            </Typography>
                        </Box>

                        {/* Email */}
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
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                onFocus={clearErrors}
                            />
                            <Typography fontSize={'1.5rem'} color="error" id="emailError">
                                {formErrors.email}
                            </Typography>
                        </Box>

                        {/* Registration Button */}
                        <Box sx={{
                            marginBottom: '1rem',
                            marginTop: '1rem',
                            display: 'flex',
                            fontSize: '1.5rem',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            color: '#ff7e00'
                        }}>
                            <Button
                                sx={{
                                    backgroundColor: 'var(--green-color)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 15px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    borderRadius: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',

                                    '&:hover': {
                                        backgroundColor: 'var(--orange-color)',
                                    },
                                }}


                                type="button"
                                onClick={validateForm}
                            >
                                Cadastrar
                            </Button>
                            <Box>
                                <li>
                                    <a className='linkCadastro' href="">Voltar para login</a>
                                </li>
                            </Box>
                        </Box>


                    </form>
                </Stack>
            </Stack>
        </>
    );











};


