import { useEffect, useState } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import { ApplicationScreenProps } from '../../../types/navigation';
import { storage } from '../../App';

const Discover = ({ navigation, route }: ApplicationScreenProps) => {
	const cookies = storage.getString('cookies');
	const courseId = route.params?.courseId;
	const [initialUri, setInitialUri] = useState(
		'http://localhost:3000/m/discover',
	);
	useEffect(() => {
		if (courseId) {
			setInitialUri(`http://localhost:3000/m/discover/${courseId}`);
		} else {
			setInitialUri('http://localhost:3000/m/discover');
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
				source={{
					uri: initialUri,
				}}
				injectedJavaScriptBeforeContentLoaded={`document.cookie='${cookies}';`}
			/>
		</View>
	);
};

export default Discover;
