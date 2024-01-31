import { create } from 'zustand';

interface LanguageState {
	language: string;
	setLanguage: (language: string) => void;
}
const store = (set: any) => ({
	user: null,
	setUser: (user: any) => set({ user }),
});

export const useStore = create(store);

export const useLanguageStore = create<LanguageState>(set => ({
	language: 'en',
	setLanguage: (language: string) => {
		set({ language });
	},
}));
