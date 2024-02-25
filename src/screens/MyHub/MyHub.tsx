import { Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { storage } from '../../App';

interface MyHubProps {}

const MyHub = (props: MyHubProps) => {
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
					uri: 'http://localhost:3000/m/my-hub',
				}}
				injectedJavaScriptBeforeContentLoaded={`document.cookie='${cookies}';`}
			/>
		</View>
	);
};

export default MyHub;
