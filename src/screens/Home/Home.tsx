import { Button, ButtonText, Text } from '@gluestack-ui/themed';
import { View } from 'react-native';

function Home({ navigation }) {
	return (
		<View>
			<Button onPress={() => navigation.navigate('Login')}>
				<ButtonText>Back</ButtonText>
			</Button>
			<Text>Home</Text>
		</View>
	);
}

export default Home;
