import { useFetch } from '../hooks/useFetch';
import { ImageItem } from './ImageItem';

export const ImageList = ({ category }) => {
	const { images, isLoading } = useFetch(category);

	return (
		<>
			<h4>{category}</h4>
			<ul className='gif-list'>
				{images.map((image) => (
					<ImageItem
						key={image.id}
						{...image}
					/>
				))}
			</ul>
		</>
	);
};
