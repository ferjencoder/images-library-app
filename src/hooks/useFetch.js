import { useEffect, useState } from 'react';
import { fetchImages } from '../helpers/fetchImages';

export const useFetch = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const newImages = await fetchImages(category);
		setImages(newImages);
		setIsLoading(false);
	};

	useEffect(() => {
		getImages();
	}, []);

	return {
		images,
		isLoading,
	};
};
