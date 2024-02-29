import { instance } from '../instance';

export default async () => {
	try {
		const response = await instance.get('user-level');
		return response.data.data;
	} catch (error) {
		console.error('Error fetching user level', error);
	}
};
