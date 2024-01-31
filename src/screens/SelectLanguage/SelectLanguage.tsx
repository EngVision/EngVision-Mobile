import React from 'react';
import { Box, Text, Button } from '@gluestack-ui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { ApplicationScreenProps } from '../../../types/navigation';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../zustand/store';
const SelectLanguage = ({ navigation }: ApplicationScreenProps) => {
	//This is screen test i18n and zustand, you can delete it
	console.log('Select Language');
	const setLanguage = useLanguageStore(state => state.setLanguage);
	const language = useLanguageStore(state => state.language);
	const { t, i18n } = useTranslation();
	const handleSelectLanguage = () => {
		i18n.changeLanguage('vi');
		setLanguage('vi');
	};
	return (
		<SafeAreaView>
			<Box>
				<Text>{t('Select Language')}</Text>
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
		</SafeAreaView>
	);
};

export default SelectLanguage;
