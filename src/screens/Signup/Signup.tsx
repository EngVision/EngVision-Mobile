import {
	Button,
	ButtonText,
	Checkbox,
	CheckboxLabel,
	Image,
	Input,
	InputField,
	Select,
	SelectBackdrop,
	SelectContent,
	SelectInput,
	SelectItem,
	SelectPortal,
	SelectTrigger,
} from '@gluestack-ui/themed';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

interface SignupProps {
	navigation: any;
}

const Signup = ({ navigation }: SignupProps) => {
	async function onGoogleButtonPress() {
		// Check if your device supports Google Play
		await GoogleSignin.hasPlayServices({
			showPlayServicesUpdateDialog: true,
		});
		// Get the users ID token
		const { idToken } = await GoogleSignin.signIn();
		console.log('🚀 ~ onGoogleButtonPress ~ idToken:', idToken);

		// Create a Google credential with the token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);
		console.log(
			'🚀 ~ onGoogleButtonPress ~ googleCredential:',
			googleCredential,
		);

		// Sign-in the user with the credential
		return auth().signInWithCredential(googleCredential);
	}

	useEffect(() => {
		GoogleSignin.configure({
			webClientId:
				'956215831123-jftdku8149v7q3l7af3138s0ievbr0oe.apps.googleusercontent.com',
		});
	}, []);

	return (
		<SafeAreaView
			style={{
				paddingHorizontal: 16,
			}}
		>
			<Text
				style={{
					textAlign: 'center',
					fontWeight: '600',
					fontSize: 20,
					marginTop: 24,
					marginBottom: 40,
				}}
			>
				Welcome to EngVision
			</Text>

			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 16,
				}}
			>
				<View
					style={{
						marginBottom: 16,
						flex: 1,
					}}
				>
					<Text
						style={{
							fontSize: 16,
							marginBottom: 4,
						}}
					>
						First name
					</Text>

					<Input
						variant="outline"
						size="md"
						isDisabled={false}
						isInvalid={false}
						isReadOnly={false}
					>
						<InputField placeholder="Enter your first name" />
					</Input>
				</View>

				<View
					style={{
						marginBottom: 16,
						flex: 1,
					}}
				>
					<Text
						style={{
							fontSize: 16,
							marginBottom: 4,
						}}
					>
						Last name
					</Text>

					<Input
						variant="outline"
						size="md"
						isDisabled={false}
						isInvalid={false}
						isReadOnly={false}
					>
						<InputField placeholder="Enter your last name" />
					</Input>
				</View>
			</View>

			<View
				style={{
					marginBottom: 16,
				}}
			>
				<Text
					style={{
						fontSize: 16,
						marginBottom: 4,
					}}
				>
					Email
				</Text>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField placeholder="Enter your email" />
				</Input>
			</View>

			<View
				style={{
					marginBottom: 16,
				}}
			>
				<Text
					style={{
						fontSize: 16,
						marginBottom: 4,
					}}
				>
					Gender
				</Text>

				<Select>
					<SelectTrigger variant="outline" size="md">
						<SelectInput placeholder="Select option" />
					</SelectTrigger>
					<SelectPortal>
						<SelectBackdrop />
						<SelectContent>
							<SelectItem label="Male" value="male" />
							<SelectItem label="Female" value="female" />
							<SelectItem label="Other" value="other" />
						</SelectContent>
					</SelectPortal>
				</Select>
			</View>

			<View
				style={{
					marginBottom: 16,
				}}
			>
				<Text
					style={{
						fontSize: 16,
						marginBottom: 4,
					}}
				>
					Password
				</Text>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField placeholder="Enter your password" type="password" />
				</Input>
			</View>

			<View
				style={{
					marginBottom: 16,
				}}
			>
				<Text
					style={{
						fontSize: 16,
						marginBottom: 4,
					}}
				>
					Confirm password
				</Text>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField placeholder="Enter your password" type="password" />
				</Input>
			</View>

			<View
				style={{
					marginBottom: 16,
				}}
			>
				<Checkbox size="md" isInvalid={false} isDisabled={false}>
					{/* <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator> */}
					<CheckboxLabel>I accept Terms and Services</CheckboxLabel>
				</Checkbox>
			</View>

			<View
				style={{
					marginTop: 16,
					marginBottom: 16,
				}}
			>
				<Button
					size="md"
					variant="solid"
					action="primary"
					isDisabled={false}
					isFocusVisible={false}
					style={{
						borderRadius: 50,
					}}
				>
					<ButtonText>Signup</ButtonText>
				</Button>
			</View>

			<Text
				style={{
					textAlign: 'center',
					color: '#666',
					marginBottom: 16,
				}}
			>
				----- or continue with -----
			</Text>

			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 16,
					justifyContent: 'center',
				}}
			>
				<TouchableOpacity
					style={{
						borderWidth: 1,
						borderColor: '#000',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 8,
						width: 60,
						height: 60,
					}}
					onPress={() =>
						onGoogleButtonPress().then(data =>
							console.log('Signed in with Google!', data),
						)
					}
				>
					<Image
						size="md"
						borderRadius="$none"
						source={{
							uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png',
						}}
						style={{
							width: 32,
							height: 32,
						}}
						alt="Google"
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						borderWidth: 1,
						borderColor: '#000',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 8,
						width: 60,
						height: 60,
					}}
					onPress={() =>
						onGoogleButtonPress().then(data =>
							console.log('Signed in with Google!', data),
						)
					}
				>
					<Image
						size="md"
						borderRadius="$none"
						source={{
							uri: 'https://www.facebook.com/images/fb_icon_325x325.png',
						}}
						style={{
							width: 32,
							height: 32,
						}}
						alt="Facebook"
					/>
				</TouchableOpacity>
			</View>

			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 4,
					justifyContent: 'center',
					marginTop: 16,
				}}
			>
				<Text>Already have an account?</Text>
				<Text
					style={{
						fontWeight: '600',
						color: '#2769e7',
					}}
					onPress={() => navigation.navigate('Login')}
				>
					Login
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default Signup;
