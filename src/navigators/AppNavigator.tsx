import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as Screens from '../screens';
const Tab = createBottomTabNavigator();
const AppBottomTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Screens.Home} />
			<Tab.Screen name="Settings" component={Screens.Home} />
		</Tab.Navigator>
	);
};

export const AppNavigator = () => {
	return (
		<NavigationContainer>
			<AppBottomTab />
		</NavigationContainer>
	);
};
