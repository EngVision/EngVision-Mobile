import { instance } from '../instance';

export default async () => {
	const response = await instance.get('auth/me');
	return response;
};
