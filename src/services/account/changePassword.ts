import { instance } from '../instance';

export default async (body: any) => {
	const response = await instance.put('account/password', body);
	return response;
};
