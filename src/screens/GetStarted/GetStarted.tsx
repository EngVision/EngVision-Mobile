import { Image, TouchableOpacity, Text, SafeAreaView } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import { ApplicationScreenProps } from '../../../types/navigation';

export const GetStarted = ({ navigation }: ApplicationScreenProps) => {
	const handleDone = () => {
		navigation.navigate('Login');
	};

	const buttonDone = () => {
		return (
			<TouchableOpacity
				style={{ borderRadius: 20, marginRight: 10 }}
				onPressIn={handleDone}
			>
				<Text
					style={{
						fontSize: 20,
						paddingHorizontal: 14,
						paddingVertical: 6,
						color: 'white',
					}}
				>
					Done
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Onboarding
				onDone={handleDone}
				onSkip={handleDone}
				DoneButtonComponent={buttonDone}
				pages={[
					{
						backgroundColor: '#fff',
						image: (
							<Image
								source={{
									uri: 'https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-the-girl-is-studying-english-in-online-courses-png-image_4671644.png',
								}}
								style={{ width: 300, height: 300, borderRadius: 12 }}
							/>
						),
						title: 'Study English for Free',
						subtitle:
							'Unlock the world of English learning with our free app. Dive into interactive lessons, practice exercises, and quizzes designed to improve your language skills.',
					},
					{
						backgroundColor: '#BF6AE3',
						image: (
							<Image
								source={{
									uri: 'https://www.edusuite.pk/wp-content/uploads/2019/12/Effective-Ways-to-Monitor-Student-Progress-in-Classroom.jpg',
								}}
								style={{ width: 300, height: 300, borderRadius: 12 }}
							/>
						),
						title: 'Student Progress Tracking',
						subtitle:
							'EngVision provides detailed analytics and reports, allowing you to assess individual student achievements and identify areas for improvement.',
					},
					{
						backgroundColor: '#0197F6',
						image: (
							<Image
								source={{
									uri: 'https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/399583490_122108376122097631_8682966601631789255_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kgmu1hh7qp4AX8peUH5&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfBIVoif86pKH76VStFOS4gNm-Q2k0_oTtv8aK1Oc1UzuQ&oe=65C2DDE9',
								}}
								style={{ width: 300, height: 300, borderRadius: 12 }}
							/>
						),
						title: 'Optimize Your Learning Experience with Web Access',
						subtitle:
							'Unlock Enhanced Features and Convenience by Accessing EngVision on the Web.',
					},
				]}
			/>
		</SafeAreaView>
	);
};

export default GetStarted;
