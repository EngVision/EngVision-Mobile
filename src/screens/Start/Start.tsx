import { SafeAreaView } from 'react-native-safe-area-context';
import { ApplicationScreenProps } from '../../../types/navigation';
import { Image } from 'react-native';
import { useEffect } from 'react';

export const Start = ({ navigation }: ApplicationScreenProps) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('GetStarted');
		}, 1000);
	}, []);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 30,
			}}
		>
			<Image
				source={require('../../assets/images/logo.png')}
				style={{ width: 120, height: 120 }}
			/>
			<Image source={require('../../assets/images/logo-text.png')} />
		</SafeAreaView>
	);
};
