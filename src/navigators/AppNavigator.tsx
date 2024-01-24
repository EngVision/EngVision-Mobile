import { Icon } from '@gluestack-ui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import type { ApplicationStackParamList } from '../../types/navigation';
import * as Screens from '../screens';
import { LayoutGrid, Settings } from 'lucide-react-native';
const Tab = createBottomTabNavigator<ApplicationStackParamList>();
const AppBottomTab = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="Home"
				component={Screens.Home}
				options={{
					tabBarIcon: () => <LayoutGrid color={'blue'} />,
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Screens.Home}
				options={{ tabBarIcon: () => <Settings color={'blue'} /> }}
			/>
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
