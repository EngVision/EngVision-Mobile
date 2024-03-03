import * as React from 'react';
import { Text, View } from 'react-native';

interface HomeCardProps {
	label: string;
	value: string | number;
}

const HomeCard = ({ label, value }: HomeCardProps) => {
	return (
		<View
			style={{
				paddingHorizontal: 16,
				paddingVertical: 32,
				borderRadius: 8,
				borderWidth: 1,
				borderColor: '#2563eb',
				flex: 1,
			}}
		>
			<Text
				style={{
					textTransform: 'uppercase',
					fontSize: 20,
					fontWeight: '500',
					textAlign: 'center',
					color: '#2563eb',
				}}
			>
				{label}
			</Text>

			<Text
				style={{
					fontSize: 24,
					textAlign: 'center',
					fontWeight: '500',
					color: '#1d4ed8',
				}}
			>
				{value}
			</Text>
		</View>
	);
};

export default HomeCard;
