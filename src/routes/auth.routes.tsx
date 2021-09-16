import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => (
	<Auth.Navigator
		initialRouteName='Login'
		screenOptions={{
			headerShown: false
		}}
	>
		<Auth.Screen name='Login' component={Login} />
	</Auth.Navigator>
);
