import {
	Image,
	Text,
	View,
	ChevronRightIcon,
	Switch,
	Icon,
} from '@gluestack-ui/themed';
import { useStore } from '../../zustand/store';
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

interface SettingsProps {
	navigation: any;
}

const Settings = ({ navigation }: SettingsProps) => {
	const user: any = useStore(state => state.user);
	const darkMode = useStore(state => state.darkMode);
	const setDarkMode = useStore(state => state.setDarkMode);

	return (
		<SafeAreaView>
			<View
				style={{
					paddingHorizontal: 24,
					paddingVertical: 8,
					backgroundColor: darkMode ? '#111827' : '#fff',
					minHeight: '100%',
				}}
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						width: '100%',
						marginTop: 20,
						gap: 12,
					}}
				>
					<Image
						size="xs"
						borderRadius={410}
						source={{
							uri: `http://localhost:5000/files/${user.avatar}`,
						}}
						alt="Profile"
					/>

					<Text
						style={{
							fontWeight: '700',
							fontSize: 20,
							color: darkMode ? '#fff' : '#000',
						}}
					>
						{user.firstName} {user.lastName}
					</Text>
				</View>

				<View
					style={{
						marginVertical: 16,
						borderBottomColor: '#ddd',
						borderBottomWidth: 1,
					}}
				/>

				<View
					style={{
						paddingVertical: 8,
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: '500',
							color: darkMode ? '#fff' : '#999',
							paddingBottom: 8,
						}}
					>
						Account settings
					</Text>

					<TouchableOpacity
						style={{
							paddingVertical: 10,
						}}
						onPress={() => navigation.navigate('Profile')}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Text
								style={{
									fontWeight: '500',
									color: darkMode ? '#fff' : '#000',
								}}
							>
								Edit profile
							</Text>

							<Icon
								as={ChevronRightIcon}
								m="$2"
								w="$4"
								h="$4"
								color={darkMode ? '#fff' : '#000'}
							/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							paddingVertical: 10,
						}}
						onPress={() => navigation.navigate('ChangePassword')}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Text
								style={{
									fontWeight: '500',
									color: darkMode ? '#fff' : '#000',
								}}
							>
								Change password
							</Text>

							<Icon
								as={ChevronRightIcon}
								m="$2"
								w="$4"
								h="$4"
								color={darkMode ? '#fff' : '#000'}
							/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							paddingVertical: 10,
						}}
						onPress={() => navigation.navigate('SelectLanguage')}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Text
								style={{
									fontWeight: '500',
									color: darkMode ? '#fff' : '#000',
								}}
							>
								Language
							</Text>

							<Icon
								as={ChevronRightIcon}
								m="$2"
								w="$4"
								h="$4"
								color={darkMode ? '#fff' : '#000'}
							/>
						</View>
					</TouchableOpacity>

					<View
						style={{
							paddingVertical: 10,
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Text
								style={{
									fontWeight: '500',
									color: darkMode ? '#fff' : '#000',
								}}
							>
								Dark mode
							</Text>

							<Switch
								size="md"
								isDisabled={false}
								onValueChange={value => setDarkMode(value)}
							/>
						</View>
					</View>

					<TouchableOpacity
						style={{
							paddingVertical: 10,
						}}
						onPress={() => navigation.navigate('Login')}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Text
								style={{
									fontWeight: '500',
									color: 'red',
								}}
							>
								Logout
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View
					style={{
						marginVertical: 16,
						borderBottomColor: '#ddd',
						borderBottomWidth: 1,
					}}
				/>

				<View
					style={{
						paddingVertical: 8,
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: '500',
							paddingBottom: 8,
							color: darkMode ? '#fff' : '#999',
						}}
					>
						More
					</Text>

					<TouchableOpacity
						style={{
							paddingVertical: 10,
						}}
						onPress={() => navigation.navigate('PrivacyPolicy')}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Text
								style={{
									fontWeight: '500',
									color: darkMode ? '#fff' : '#000',
								}}
							>
								Privacy policy
							</Text>

							<Icon
								as={ChevronRightIcon}
								m="$2"
								w="$4"
								h="$4"
								color={darkMode ? '#fff' : '#000'}
							/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							paddingVertical: 10,
						}}
						onPress={() => navigation.navigate('TermAndCondition')}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Text
								style={{
									fontWeight: '500',
									color: darkMode ? '#fff' : '#000',
								}}
							>
								Term and conditions
							</Text>

							<Icon
								as={ChevronRightIcon}
								m="$2"
								w="$4"
								h="$4"
								color={darkMode ? '#fff' : '#000'}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Settings;

const styles = StyleSheet.create({
	container: {},
});
