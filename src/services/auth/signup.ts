import { instance } from '../instance';

export default async (body: any) => {
	const response = await instance.post('auth/register', body);

	const cookies = response.headers['set-cookie'];
	instance.defaults.headers.Cookie = cookies as any;

	return response;
};
