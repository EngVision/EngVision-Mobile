import { Icon } from '@gluestack-ui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import type { ApplicationStackParamList } from '../../types/navigation';
import * as Screens from '../screens';
import { LayoutGrid, Settings } from 'lucide-react-native';

const Stack = createStackNavigator<ApplicationStackParamList>();

const Tab = createBottomTabNavigator<ApplicationStackParamList>();

const AppBottomTab = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="Login"
				component={Screens.Login}
				options={{
					tabBarIcon: () => <LayoutGrid color={'blue'} />,
				}}
			/>
			<Tab.Screen
				name="Signup"
				component={Screens.Signup}
				options={{
					tabBarIcon: () => <LayoutGrid color={'blue'} />,
				}}
			/>
			<Tab.Screen
				name="Home"
				component={Screens.Home}
				options={{
					tabBarIcon: () => <LayoutGrid color={'blue'} />,
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Screens.Settings}
				options={{ tabBarIcon: () => <Settings color={'blue'} /> }}
			/>
		</Tab.Navigator>
	);
};

export const AppNavigator = () => {
	return (
		<NavigationContainer>
			{/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
			{/* <Stack.Screen name="Login" component={Screens.Login} />
			<Stack.Screen name="Signup" component={Screens.Signup} /> */}
			{/* </Stack.Navigator> */}

			<AppBottomTab />
		</NavigationContainer>
	);
};
