import {
	ArrowLeftIcon,
	ButtonText,
	Icon,
	Image,
	Input,
	InputField,
	Select,
	SelectItem,
	SelectPortal,
} from '@gluestack-ui/themed';
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SelectTrigger } from '@gluestack-ui/themed';
import { SelectInput } from '@gluestack-ui/themed';
import { SelectBackdrop } from '@gluestack-ui/themed';
import { SelectContent } from '@gluestack-ui/themed';
import { useMutation } from '@tanstack/react-query';
import { updateProfile } from '../../services/account';
import { useStore } from '../../zustand/store';
import LoadingButton from '../../components/common/LoadingButton';

interface ProfileProps {
	navigation: any;
}

const Profile = ({ navigation }: ProfileProps) => {
	const user: any = useStore(state => state.user);

	const [formValues, _setFormValues] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		gender: user.gender,
	});

	const setFormValues = (value: any) =>
		_setFormValues(prev => ({ ...prev, ...value }));

	const { isPending, mutate } = useMutation({
		mutationFn: updateProfile,
	});

	const handleUpdateProfile = () => {
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
					Profile
				</Text>
			</View>

			<View
				style={{
					display: 'flex',
					alignItems: 'center',
					marginBottom: 20,
				}}
			>
				<Image
					size="xl"
					borderRadius={410}
					source={{
						uri: `http://localhost:5000/files/${user.avatar}`,
					}}
					alt="Profile"
				/>
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
					First name
				</Text>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder="Enter your first name"
						defaultValue={formValues.firstName}
						onChangeText={value => setFormValues({ firstName: value })}
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
					Last name
				</Text>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder="Enter your last name"
						defaultValue={formValues.lastName}
						onChangeText={value => setFormValues({ lastName: value })}
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
						defaultValue={formValues.email}
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
					Gender
				</Text>

				<Select
					defaultValue={formValues.gender}
					onValueChange={value => setFormValues({ gender: value })}
				>
					<SelectTrigger variant="outline" size="md">
						<SelectInput placeholder="Select option" />
					</SelectTrigger>
					<SelectPortal>
						<SelectBackdrop />
						<SelectContent>
							<SelectItem label="Male" value="Male" />
							<SelectItem label="Female" value="Female" />
							<SelectItem label="Other" value="Other" />
						</SelectContent>
					</SelectPortal>
				</Select>
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
					onPress={handleUpdateProfile}
					isLoading={isPending}
				>
					<ButtonText>Save</ButtonText>
				</LoadingButton>
			</View>
		</View>
	);
};

export default Profile;
