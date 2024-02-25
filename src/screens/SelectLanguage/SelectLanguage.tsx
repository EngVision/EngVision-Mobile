import React from 'react';
import { Box, Text, Button, ArrowLeftIcon, Icon } from '@gluestack-ui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { ApplicationScreenProps } from '../../../types/navigation';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../zustand/store';
import { View } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';

const SelectLanguage = ({ navigation }: ApplicationScreenProps) => {
	//This is screen test i18n and zustand, you can delete it
	const setLanguage = useLanguageStore(state => state.setLanguage);
	const language = useLanguageStore(state => state.language);
	const { t, i18n } = useTranslation();
	const handleSelectLanguage = () => {
		i18n.changeLanguage('vi');
		setLanguage('vi');
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
					{t('Select Language')}
				</Text>
			</View>

			<Box>
				<Button
					action={'primary'}
					variant={'link'}
					size={'md'}
					isDisabled={false}
					gap={2}
					onPress={handleSelectLanguage}
				>
					<Text>English</Text>
				</Button>
				<Button
					action={'primary'}
					variant={'link'}
					size={'md'}
					isDisabled={false}
					gap={2}
					onPress={() => {
						console.log('Language: ', language);
					}}
				>
					<Text>Vietnamese</Text>
				</Button>
			</Box>
		</View>
	);
};

export default SelectLanguage;
