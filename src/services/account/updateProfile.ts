import { instance } from '../instance';

export default async (body: any) => {
	const response = await instance.patch('account/profile', body);
	return response;
};
