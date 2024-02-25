import { Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { storage } from '../../App';

interface DiscoverProps {}

const Discover = (props: DiscoverProps) => {
	const cookies = storage.getString('cookies');

	return (
		<View
			style={{
				width: '100%',
				height: 800,
			}}
		>
			<WebView
				originWhitelist={['*']}
				source={{
					uri: 'http://localhost:3000/m/discover',
				}}
				injectedJavaScriptBeforeContentLoaded={`document.cookie='${cookies}';`}
			/>
		</View>
	);
};

export default Discover;
