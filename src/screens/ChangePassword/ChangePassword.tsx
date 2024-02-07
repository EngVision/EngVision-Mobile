import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {
	ArrowLeftIcon,
	Button,
	ButtonText,
	Icon,
	Input,
	InputField,
} from '@gluestack-ui/themed';
import { useMutation } from '@tanstack/react-query';
import { changePassword } from '../../services/account';

interface ChangePasswordProps {
	navigation: any;
}

const ChangePassword = ({ navigation }: ChangePasswordProps) => {
	const [formValues, _setFormValues] = useState({
		oldPassword: '',
		newPassword: '',
		confirmNewPassword: '',
	});

	const setFormValues = (value: any) =>
		_setFormValues(prev => ({ ...prev, ...value }));

	const { mutate } = useMutation({
		mutationFn: changePassword,
	});

	const handleChangePassword = () => {
		mutate(formValues);
	};

	return (
		<View
			style={{
				paddingHorizontal: 16,
				paddingVertical: 20,
			}}
		>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					marginBottom: 32,
				}}
			>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
					}}
				>
					<Icon as={ArrowLeftIcon} size="xl" />
				</TouchableOpacity>

				<Text
					style={{
						fontSize: 20,
						fontWeight: '600',
					}}
				>
					Change password
				</Text>
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
					Old password
				</Text>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder="Enter your old password"
						type="password"
						onChangeText={value => setFormValues({ oldPassword: value })}
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
					New password
				</Text>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder="Enter your new password"
						type="password"
						onChangeText={value => setFormValues({ newPassword: value })}
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
					Retype new password
				</Text>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder="Retype your new password"
						type="password"
						onChangeText={value => setFormValues({ confirmNewPassword: value })}
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
					onPress={handleChangePassword}
				>
					<ButtonText>Change</ButtonText>
				</Button>
			</View>
		</View>
	);
};

export default ChangePassword;
