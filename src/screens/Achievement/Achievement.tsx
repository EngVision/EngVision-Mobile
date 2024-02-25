import { Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { storage } from '../../App';

interface AchievementProps {}

const Achievement = (props: AchievementProps) => {
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
					uri: 'http://localhost:3000/m/achievement',
				}}
				injectedJavaScriptBeforeContentLoaded={`document.cookie='${cookies}';`}
			/>
		</View>
	);
};

export default Achievement;
