import { Icon } from '@gluestack-ui/themed';
import { ArrowLeftIcon } from '@gluestack-ui/themed';
import { Text, View, TouchableOpacity } from 'react-native';

interface TermAndConditionProps {
	navigation: any;
}

const TermAndCondition = ({ navigation }: TermAndConditionProps) => {
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
					Term and conditions
				</Text>
			</View>

			<View>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
					EngVision App Terms and Conditions
				</Text>
				<Text style={{ marginTop: 16 }}>
					These Terms and Conditions govern your use of the English Learning App{' '}
					<Text style={{ fontWeight: '700' }}>EngVision</Text>. By using the
					App, you agree to these Terms. If you do not agree to these Terms, you
					may not use the App.
				</Text>
				<Text style={{ marginTop: 8 }}>
					The App is owned and operated by{' '}
					<Text style={{ fontWeight: '700' }}>EngVision</Text>.
				</Text>
				<Text style={{ marginTop: 8 }}>
					In order to use the App, you must create an account and provide
					certain personal information. You agree to provide accurate and
					up-to-date information.
				</Text>
				<Text style={{ marginTop: 8 }}>
					You agree to use the App only for lawful purposes and in a way that
					does not violate the rights of others. You agree not to use the App
					to:
				</Text>
				<Text style={{ marginTop: 4 }}>{'	'}- Harm or harass others</Text>
				<Text style={{ marginTop: 4 }}>
					{'	'}- Violate the privacy or intellectual property rights of others
				</Text>
				<Text style={{ marginTop: 4 }}>
					{'	'}- Post any unlawful, harmful, threatening, abusive, harassing,
					tortious, defamatory, libelous, vulgar, obscene, libelous, invasive of
					another's privacy, hateful, racially, ethnically, or otherwise
					objectionable content
				</Text>
				<Text style={{ marginTop: 4 }}>
					{'	'}- Post any viruses or other harmful code
				</Text>
				<Text style={{ marginTop: 4 }}>
					{'	'}- Interfere with the App or attempt to gain unauthorized access to
					the App
				</Text>
				<Text style={{ marginTop: 4 }}>
					{'	'}- Impersonate any person or entity
				</Text>
				<Text style={{ marginTop: 4 }}>
					{'	'}- Collect or track personal information about others
				</Text>
			</View>
		</View>
	);
};

export default TermAndCondition;
