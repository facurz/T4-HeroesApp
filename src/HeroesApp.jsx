import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

import 'animate.css';

export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AppRouter />
                </ThemeProvider>
            </AuthProvider>
        </>
    );
};
