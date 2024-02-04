import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
			<Tab.Screen
				name="SelectLanguage"
				component={Screens.SelectLanguage}
				options={{ tabBarIcon: () => <LayoutGrid color={'blue'} /> }}
			/>
		</Tab.Navigator>
	);
};

export const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Start"
					component={Screens.Start}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="GetStarted"
					component={Screens.GetStarted}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={Screens.Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={AppBottomTab}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
