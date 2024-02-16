import { Icon } from '@gluestack-ui/themed';
import { ArrowLeftIcon } from '@gluestack-ui/themed';
import { Text, View, TouchableOpacity } from 'react-native';

interface PrivacyPolicyProps {
	navigation: any;
}

const PrivacyPolicy = ({ navigation }: PrivacyPolicyProps) => {
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
					Privacy policy
				</Text>
			</View>

			<View>
				<Text>
					By using this application, you consent to the collection, use, and
					disclosure of your personal information as outlined in our Privacy
					Policy.
				</Text>
				<View style={{ marginTop: 16 }}>
					<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
						EngVision App Privacy Policy
					</Text>
					<Text style={{ marginTop: 16 }}>
						This Privacy Policy describes how we collect, use, disclose, and
						store your personal information when you use our English Learning
						App <Text style={{ fontWeight: '700' }}>EngVision</Text>.
					</Text>
					<Text style={{ marginTop: 8, fontWeight: '700' }}>
						How We Use Your Information:
					</Text>
					<Text style={{ marginTop: 4 }}>
						{'  '}- To personalize your learning experience
					</Text>
					<Text style={{ marginTop: 4 }}>
						{'  '}- To provide customer support
					</Text>
					<Text style={{ marginTop: 4 }}>
						{'  '}- To improve the App and develop new features
					</Text>
					<Text style={{ marginTop: 4 }}>
						{'  '}- To comply with legal obligations
					</Text>
					<Text style={{ marginTop: 8, fontWeight: '700' }}>
						Sharing Your Information:
					</Text>
					<Text style={{ marginTop: 4 }}>
						We may share your information with third-party service providers who
						assist us in operating the App. We will not share your information
						with third-party advertisers without your consent.
					</Text>
					<Text style={{ marginTop: 8, fontWeight: '700' }}>
						Data Retention:
					</Text>
					<Text style={{ marginTop: 4 }}>
						We will retain your information for as long as your account is
						active or as needed to fulfill the purposes outlined in this Privacy
						Policy.
					</Text>
					<Text style={{ marginTop: 8, fontWeight: '700' }}>Your Choices:</Text>
					<Text style={{ marginTop: 4 }}>
						You have the right to access, update, or delete your personal
						information. You can also opt-out of marketing communications.
					</Text>
					<Text style={{ marginTop: 8, fontWeight: '700' }}>Contact Us:</Text>
					<Text style={{ marginTop: 4 }}>
						If you have any questions about this Privacy Policy, please contact
						us at{' '}
						<Text style={{ fontWeight: '700' }}>engvision.dev@gmail.com</Text>.
					</Text>
				</View>
			</View>
		</View>
	);
};

export default PrivacyPolicy;
