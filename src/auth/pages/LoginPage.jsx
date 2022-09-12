import React, { useContext, useState } from 'react'

import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

const formData = {
    email: '',
    password: '',
};

const formValidations = {
    email: [
        [value => value.includes('@'), 'El correo debe tener un @'],
        [
            value =>
                value.match(
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
                ),
            'El correo debe tener un formato valido',
        ],
    ],
    password: [
        [
            value => value.length >= 6,
            'El password debe tener al menos 6 caracteres',
        ],
    ],
};



export const LoginPage = () => {
    
    const {startGoogleSignIn, startLoginWithEmailPassword} = useContext(AuthContext);

    const [formSubmited, setFormSubmited] = useState(false);

    const {
        email,
        password,
        onInputChange,
        isFormValid,
        passwordValid,
        emailValid,
    } = useForm(formData, formValidations);


    const onSubmit = event => {
        event.preventDefault();
        setFormSubmited(true);
        if (!isFormValid) return;
        startLoginWithEmailPassword({email, password})
        
    };

    const onGoogleSignIn = () => {
        startGoogleSignIn()
    };

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label='Correo'
                        type='email'
                        placeholder='correo@gmail.com'
                        fullWidth
                        name='email'
                        value={email}
                        onChange={onInputChange}
                        autoComplete='username'
                        error={!!emailValid && formSubmited}
                        helperText={formSubmited && emailValid}
                        
                    />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label='Contraseña'
                        type='password'
                        placeholder='Contraseña'
                        fullWidth
                        name='password'
                        value={password}
                        onChange={onInputChange}
                        autoComplete='current-password'
                        error={!!passwordValid && formSubmited}
                        helperText={formSubmited && passwordValid}
                    />
                </Grid>
                <Grid container spacing={1} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Button
                            variant='contained'
                            fullWidth
                            type='submit'
                            disabled={!isFormValid && formSubmited}
                            
                        >
                            <Typography sx={{ ml: 1 }}>Login</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Button
                            variant='contained'
                            fullWidth
                            onClick={onGoogleSignIn}
                            
                        >
                            <Google />
                            <Typography sx={{ ml: 1 }}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction='row' justifyContent='end'>
                    <Link
                        component={RouterLink}
                        color='inherit'
                        to='/auth/register'
                    >
                        Crear una cuenta
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    );
};
