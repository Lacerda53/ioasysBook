import React from 'react';
import { AppProvider } from './src/context';
import { Routes } from './src/routes';

export const App: React.FC = () => {
    return (
        <AppProvider>
            <Routes />
        </AppProvider>
    );
}