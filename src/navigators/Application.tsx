import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Example, Login, Signup, Startup, Home, Settings } from '@/screens';
import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Settings" component={Settings} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="Startup" component={Startup} />
				<Stack.Screen name="Example" component={Example} />
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
