import { create } from 'zustand';

const store = (set: any) => ({
	user: null,
	setUser: (user: any) => set({ user }),
});

export const useStore = create(store);
