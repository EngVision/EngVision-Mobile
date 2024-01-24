import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {
	Button,
	Input,
	InputField,
	ButtonText,
	Image,
} from '@gluestack-ui/themed';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/services/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

function Login({ navigation }) {
	const { mutate } = useMutation({
		mutationFn: body => login(body),
		onSuccess: data => {
			console.log('SUCCESS: ', data);
		},
		onError: error => {
			console.log('ERROR: ', error);
		},
	});

	const [formValues, _setFormValues] = useState({
		email: '',
		password: '',
	});

	const setFormValues = value =>
		_setFormValues(prev => ({ ...prev, ...value }));

	const handleLogin = async () => {
		console.log('formValues: ', formValues);

		mutate(formValues, {
			onSuccess: () => {
				navigation.navigate('Home');
			},
		});
	};

	async function onGoogleButtonPress() {
		console.log('PRESS LOGIN');
		// Check if your device supports Google Play
		await GoogleSignin.hasPlayServices({
			showPlayServicesUpdateDialog: true,
		});
		// Get the users ID token
		console.log('GET ID');
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

	async function onFacebookButtonPress() {
		console.log('LOGIN WITH FACEBOOK');
		// Attempt login with permissions
		const result = await LoginManager.logInWithPermissions([
			'public_profile',
			'email',
		]);
		console.log('🚀 ~ onFacebookButtonPress ~ result:', result);

		if (result.isCancelled) {
			throw 'User cancelled the login process';
		}

		console.log('GET DATA');
		// Once signed in, get the users AccessToken
		const data = await AccessToken.getCurrentAccessToken();
		console.log('🚀 ~ onFacebookButtonPress ~ data:', data);

		if (!data) {
			throw 'Something went wrong obtaining access token';
		}

		// Create a Firebase credential with the AccessToken
		const facebookCredential = auth.FacebookAuthProvider.credential(
			data.accessToken,
		);
		console.log(
			'🚀 ~ onFacebookButtonPress ~ facebookCredential:',
			facebookCredential,
		);

		// Sign-in the user with the credential
		return auth().signInWithCredential(facebookCredential);
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
				<Button
					size="md"
					variant="solid"
					action="primary"
					isDisabled={false}
					isFocusVisible={false}
					style={{
						borderRadius: 50,
					}}
					onPress={handleLogin}
				>
					<ButtonText>Login</ButtonText>
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
						onGoogleButtonPress().then(data => {
							console.log('Signed in with Google!', data);
							navigation.navigate('Home');
						})
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
						onFacebookButtonPress().then(data => {
							console.log('Signed in with Facebook!', data);
							navigation.navigate('Home');
						})
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
}

export default Login;
