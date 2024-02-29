import { instance } from '../instance';

export default async () => {
	try {
		const response = await instance.get('courses/exercises');
		return response.data.data;
	} catch (error) {
		console.error('Error fetching courses exercises', error);
	}
};
