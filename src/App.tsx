import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppNavigator } from './navigators';
import { MMKV } from 'react-native-mmkv';
const queryClient = new QueryClient();
export const storage = new MMKV();
export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GluestackUIProvider config={config}>
				<AppNavigator />
			</GluestackUIProvider>
		</QueryClientProvider>
	);
}
