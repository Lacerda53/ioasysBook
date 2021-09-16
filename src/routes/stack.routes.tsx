import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { BookDetails } from '../screens/BookDetails';

export type RootStackParamList = {
	Home: {};
	BookDetails: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackRoutes: React.FC = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
		>
			<Stack.Screen name='Home' options={{ headerShown: false, title: '' }} component={Home} />
			<Stack.Screen name='BookDetails' options={{ headerShown: false, title: '' }} component={BookDetails} />
		</Stack.Navigator>
	);
};