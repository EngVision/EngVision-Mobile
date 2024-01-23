import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Home: undefined;
	Settings: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
