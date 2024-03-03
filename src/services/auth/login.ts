import { storage } from '../../App';
import { instance } from '../instance';

export default async (body: any) => {
	const response = await instance.post('auth/login', body);

	const cookies = response.headers['set-cookie'];
	storage.set('cookies', cookies?.[0] || '');

	instance.defaults.headers.Cookie = cookies as any;

	return response;
};
