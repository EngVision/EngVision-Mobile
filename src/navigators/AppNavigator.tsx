import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import type { ApplicationStackParamList } from '../../types/navigation';
import * as Screens from '../screens';
import {
	BookOpen,
	Globe,
	LayoutGrid,
	Settings,
	Trophy,
} from 'lucide-react-native';
import { useStore } from '../zustand/store';
import { Role } from '../utils/constants';

const Stack = createStackNavigator<ApplicationStackParamList>();

const Tab = createBottomTabNavigator<ApplicationStackParamList>();

const StudentHomeScreen = () => {
	const user: any = useStore(state => state.user);

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
				name="MyHub"
				component={Screens.MyHub}
				options={{
					tabBarIcon: () => <BookOpen color="#2769E7" />,
				}}
			/>

			<Tab.Screen
				name="Discover"
				component={Screens.Discover}
				options={{
					tabBarIcon: () => <Globe color="#2769E7" />,
				}}
			/>

			<Tab.Screen
				name="Achievement"
				component={Screens.Achievement}
				options={{
					tabBarIcon: () => <Trophy color="#2769E7" />,
				}}
			/>

			<Tab.Screen
				name="Settings"
				component={Screens.Settings}
				options={{ tabBarIcon: () => <Settings color="#2769E7" /> }}
			/>
		</Tab.Navigator>
	);
};

const TeacherHomeScreen = () => {
	const user: any = useStore(state => state.user);

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
		</Tab.Navigator>
	);
};

export const AppNavigator = () => {
	const user: any = useStore(state => state.user);

	let HomeScreen = StudentHomeScreen;
	if (user?.role === Role.Teacher) {
		HomeScreen = TeacherHomeScreen;
	}

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
				<Stack.Screen
					name="SelectLanguage"
					component={Screens.SelectLanguage}
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
