import {
	ButtonText,
	Image,
	Input,
	InputField,
	Text,
	View,
} from '@gluestack-ui/themed';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import { login } from '../../services/auth';
import { useStore } from '../../zustand/store';
import { CommonActions } from '@react-navigation/native';
import LoadingButton from '../../components/common/LoadingButton';

interface LoginProps {
	navigation: any;
}

const Login = ({ navigation }: LoginProps) => {
	const setUser = useStore(state => state.setUser);

	const { isPending, mutate } = useMutation({
		mutationFn: login,
	});

	const [formValues, _setFormValues] = useState({
		email: '',
		password: '',
	});

	const setFormValues = (value: any) =>
		_setFormValues(prev => ({ ...prev, ...value }));

	const resetAction = CommonActions.reset({
		index: 0,
		routes: [{ name: 'Login' }],
	});

	const handleLogin = async () => {
		mutate(formValues, {
			onSuccess: data => {
				navigation.dispatch(resetAction);
				setUser(data.data.data);
				navigation.navigate('HomeScreen');
			},
		});
	};

	async function onGoogleButtonPress() {
		// Check if your device supports Google Play
		await GoogleSignin.hasPlayServices({
			showPlayServicesUpdateDialog: true,
		});
		// Get the users ID token
		const { idToken } = await GoogleSignin.signIn();

		// Create a Google credential with the token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);

		// Sign-in the user with the credential
		return auth().signInWithCredential(googleCredential);
	}

	async function onFacebookButtonPress() {
		// Attempt login with permissions
		const result = await LoginManager.logInWithPermissions([
			'public_profile',
			'email',
		]);

		if (result.isCancelled) {
			throw 'User cancelled the login process';
		}

		// Once signed in, get the users AccessToken
		const data = await AccessToken.getCurrentAccessToken();

		if (!data) {
			throw 'Something went wrong obtaining access token';
		}

		// Create a Firebase credential with the AccessToken
		const facebookCredential = auth.FacebookAuthProvider.credential(
			data.accessToken,
		);

		// Sign-in the user with the credential
		return auth().signInWithCredential(facebookCredential);
	}

	useEffect(() => {
		GoogleSignin.configure({
			webClientId:
				'815824389921-2h11vcctv3fft2tl0ipmrgjqo9ccta0p.apps.googleusercontent.com',
		});
	}, []);

	return (
		<SafeAreaView
			style={{
				paddingHorizontal: 16,
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
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
				Welcome back
			</Text>

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
					<InputField
						placeholder="Enter your email"
						onChangeText={value => setFormValues({ email: value })}
					/>
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
					Password
				</Text>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder="Enter your password"
						onChangeText={value => setFormValues({ password: value })}
						type="password"
					/>
				</Input>
			</View>

			<View
				style={{
					marginTop: 16,
					marginBottom: 16,
				}}
			>
				<LoadingButton
					size="md"
					variant="solid"
					action="primary"
					isDisabled={false}
					isFocusVisible={false}
					style={{
						borderRadius: 50,
					}}
					onPress={handleLogin}
					isLoading={isPending}
				>
					<ButtonText>Login</ButtonText>
				</LoadingButton>
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
						onGoogleButtonPress().then(data => {
							navigation.navigate('HomeScreen');
						})
					}
				>
					<Image
						size="md"
						borderRadius={0}
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
						onFacebookButtonPress().then(data => {
							navigation.navigate('HomeScreen');
						})
					}
				>
					<Image
						size="md"
						borderRadius={0}
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
				<Text>Do you have an account?</Text>
				<Text
					style={{
						fontWeight: '600',
						color: '#2769e7',
					}}
					onPress={() => navigation.navigate('Signup')}
				>
					Signup
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default Login;
