import { Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { storage } from '../../App';
import { useEffect, useState } from 'react';
import { ApplicationScreenProps } from '../../../types/navigation';
const MyHub = ({ navigation, route }: ApplicationScreenProps) => {
	const cookies = storage.getString('cookies');
	const courseId = route.params?.courseId;
	const [initialUri, setInitialUri] = useState(
		'http://localhost:3000/m/my-hub',
	);
	useEffect(() => {
		if (courseId) {
			setInitialUri(`http://localhost:3000/m/my-hub/${courseId}`);
		} else {
			setInitialUri('http://localhost:3000/m/my-hub');
		}
	}, [courseId]);
	return (
		<View
			style={{
				width: '100%',
				height: 800,
			}}
		>
			<WebView
				originWhitelist={['*']}
				source={{ uri: initialUri }}
				injectedJavaScriptBeforeContentLoaded={`document.cookie='${cookies}';`}
			/>
		</View>
	);
};

export default MyHub;
