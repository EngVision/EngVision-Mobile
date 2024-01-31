import {
	Button,
	ButtonText,
	EditIcon,
	Icon,
	Image,
	PhoneIcon,
	Text,
	View,
} from '@gluestack-ui/themed';
import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

interface SettingsProps {
	navigation: any;
}

const Settings = ({ navigation }: SettingsProps) => {
	return (
		<SafeAreaView>
			<View
				style={{
					paddingHorizontal: 16,
				}}
			>
				<View
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						marginTop: 20,
					}}
				>
					<Image
						size="xl"
						borderRadius={410}
						source={{
							uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
						}}
						alt="Profile"
					/>
				</View>

				<View
					style={{
						display: 'flex',
						alignItems: 'center',
						marginTop: 16,
					}}
				>
					<Text
						style={{
							fontWeight: '700',
							fontSize: 24,
						}}
					>
						Kiet Le
					</Text>

					<Text>le tan kiet</Text>
				</View>

				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Text>Personal information</Text>

					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								color: '#2769e7',
							}}
						>
							Edit
						</Text>
						<Icon as={EditIcon} m="$2" w="$4" h="$4" color="#2769e7" />
					</View>
				</View>

				<View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Icon as={PhoneIcon} m="$2" w="$4" h="$4" />
							<Text>Email</Text>
						</View>

						<Text>letankietpdcd@gmail.com</Text>
					</View>

					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Icon as={PhoneIcon} m="$2" w="$4" h="$4" />
							<Text>Phone</Text>
						</View>

						<Text>123456789</Text>
					</View>
				</View>

				<Button onPress={() => navigation.navigate('Login')}>
					<ButtonText>Logout</ButtonText>
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default Settings;

const styles = StyleSheet.create({
	container: {},
});
