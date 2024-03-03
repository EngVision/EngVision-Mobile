import { getQueryParamsUrl } from '../../utils/common';
import { instance } from '../instance';

export default async (body: any) => {
	const response = await instance.get(
		`/courses/${getQueryParamsUrl(body)}`,
		body,
	);
	return response.data;
};
