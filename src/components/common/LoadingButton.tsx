import { Button } from '@gluestack-ui/themed';
import { ActivityIndicator } from 'react-native';

interface LoadingButtonProps {
	children: React.ReactNode;
	isLoading: boolean;
}

const LoadingButton = ({
	isLoading,
	children,
	...rest
}: Partial<LoadingButtonProps> & any) => {
	return (
		<Button {...rest}>
			{isLoading ? <ActivityIndicator color="#fff" /> : children}
		</Button>
	);
};

export default LoadingButton;
