import { instance } from '@/services/instance';

export default async body => {
	const response = await instance
		.post('auth/login', {
			json: body,
		})
		.json();
	return response;
};
