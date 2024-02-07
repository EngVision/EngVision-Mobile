import { Icon } from '@gluestack-ui/themed';
import { ArrowLeftIcon } from '@gluestack-ui/themed';
import { Text, View, TouchableOpacity } from 'react-native';

interface AboutUsProps {
	navigation: any;
}

const AboutUs = ({ navigation }: AboutUsProps) => {
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
					About us
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
					First name
				</Text>
			</View>
		</View>
	);
};

export default AboutUs;
