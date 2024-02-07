import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	HomeScreen: undefined;
	Home: undefined;
	Settings: undefined;
	Login: undefined;
	Signup: undefined;
	SelectLanguage: undefined;
	GetStarted: undefined;
	Start: undefined;
	Profile: undefined;
	ChangePassword: undefined;
	AboutUs: undefined;
	PrivacyPolicy: undefined;
	TermAndCondition: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
