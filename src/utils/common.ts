export const getQueryParamsUrl = (queries: any) => {
	let url = '';
	for (const key in queries) {
		const value = queries[key];
		if (value !== undefined && value !== null && value.length !== 0) {
			url += `${key}=${value}&`;
		}
	}

	return url ? `?${url.slice(0, -1)}` : '';
};
