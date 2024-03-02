import { instance } from '../instance';

export default async () => {
	try {
		const response = await instance.get('submissions');
		return response.data;
	} catch (error) {
		console.error('Error fetching submission list', error);
	}
};
