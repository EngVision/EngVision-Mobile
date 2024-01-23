import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import { ThemeProvider } from '@/theme';

import ApplicationNavigator from './navigators/Application';
import './translations';

const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
	return (
		<GluestackUIProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider storage={storage}>
					<ApplicationNavigator />
				</ThemeProvider>
			</QueryClientProvider>
		</GluestackUIProvider>
	);
}

export default App;
