import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Home: undefined;
	Settings: undefined;
	Login: undefined;
	Signup: undefined;
	SelectLanguage: undefined;
	GetStarted: undefined;
	Start: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
