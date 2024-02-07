import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import type { ApplicationStackParamList } from '../../types/navigation';
import * as Screens from '../screens';
import { LayoutGrid, Settings } from 'lucide-react-native';

const Stack = createStackNavigator<ApplicationStackParamList>();

const Tab = createBottomTabNavigator<ApplicationStackParamList>();

const HomeScreen = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Tab.Screen
				name="Home"
				component={Screens.Home}
				options={{
					tabBarIcon: () => <LayoutGrid color="#2769E7" />,
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Screens.Settings}
				options={{ tabBarIcon: () => <Settings color="#2769E7" /> }}
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
			<Stack.Navigator screenOptions={{ headerShown: false }}>
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
				<Stack.Screen name="Login" component={Screens.Login} />
				<Stack.Screen name="Signup" component={Screens.Signup} />
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="Profile" component={Screens.Profile} />
				<Stack.Screen
					name="ChangePassword"
					component={Screens.ChangePassword}
				/>
				<Stack.Screen name="AboutUs" component={Screens.AboutUs} />
				<Stack.Screen name="PrivacyPolicy" component={Screens.PrivacyPolicy} />
				<Stack.Screen
					name="TermAndCondition"
					component={Screens.TermAndCondition}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
