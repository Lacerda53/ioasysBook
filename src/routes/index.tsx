import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { InitializeInterceptors } from '../services/interceptors';
import { StackRoutes } from './stack.routes';
import { useAuth } from '../context/authContext';
import { Splash } from '../screens/Splash';

export const Routes: React.FC = () => {
	const { user, loading } = useAuth();

	InitializeInterceptors();

	if (loading) {

		return <Splash />
	}

	return (
		<NavigationContainer>
			{user.id ? <StackRoutes /> : <AuthRoutes />}
		</NavigationContainer>
	);
};