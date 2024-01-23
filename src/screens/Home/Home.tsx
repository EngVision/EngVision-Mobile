import { Box, Button, ButtonText } from '@gluestack-ui/themed';
import React from 'react';
import { ApplicationScreenProps } from '../../../types/navigation';
import * as Icons from '../../../assets/icons';
export const Home = ({ navigation }: ApplicationScreenProps) => {
	return (
		<Box>
			<Button
				action={'primary'}
				variant={'solid'}
				size={'lg'}
				isDisabled={false}
				onPress={() => {
					navigation.navigate('Settings');
				}}
			>
				<ButtonText>Button</ButtonText>
				<Icons.GluestackIcon />
			</Button>
		</Box>
	);
};
