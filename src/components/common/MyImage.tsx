import React, { useState } from 'react';
import { Image } from '@gluestack-ui/themed';
import { SERVER_FILES_URL } from '../../utils/constants';
const MyImage = ({ source }: { source: string }) => {
	const [error, setError] = useState(false);

	const handleError = () => setError(true);

	return (
		<Image
			h={200}
			w={'100%'}
			borderRadius={8}
			alt="Alternate Text"
			onError={handleError}
			source={{
				uri: error
					? 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
					: SERVER_FILES_URL + ' ' + source,
			}}
		/>
	);
};
export default MyImage;
