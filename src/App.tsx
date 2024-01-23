import { GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppNavigator } from './navigators';
const queryClient = new QueryClient();
export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GluestackUIProvider config={config}>
				<AppNavigator />
			</GluestackUIProvider>
		</QueryClientProvider>
	);
}
