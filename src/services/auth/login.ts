import { instance } from '../instance';

export default async (body: any) => {
	const response = await instance.post('auth/login', body);
	return response;
};
