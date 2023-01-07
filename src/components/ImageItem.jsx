export const ImageItem = ({ id, img, url, color }) => {
	return (
		<div
			className='card'
			key={id}
		>
			<a
				href={url}
				target={'_blank'}
			>
				<img
					className='img__list-item'
					src={img}
					alt={color}
				/>
			</a>
		</div>
	);
};
