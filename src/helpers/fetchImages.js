export const fetchImages = async (category) => {
	//const url = `https://www.googleapis.com/books/v1/volumes?q=${category}&api_key=AIzaSyBKAysP0j_OupH8iTImcubw9sr8GepgB8Y`;

	const url = `https://api.unsplash.com/search/photos?order_by=popular&X-Ratelimit-Limit=12&orientation=landscape&query=${category}&client_id=gpGG_v_R1AZi8so0EJrh3go1D-CBqdb0Jw2zY5FY5l8`;

	const resp = await fetch(url);
	console.log(resp);

	const data = await resp.json();

	const dataImages = data.results.map((img) => ({
		id: img.id,
		color: img.color,
		img: img.urls.small,
		url: img.links.download,
	}));

	console.log(dataImages[1]);

	const images = dataImages.map((image) => ({
		id: image.id,
		color: image.color,
		img: image.img,
		url: image.url,
		//authors: volumeInfo.authors,
		//description: volumeInfo.description,
	}));

	// IDEA working gifs //////////////////////////////////////////////////////////////////////
	//	const url = `https://api.giphy.com/v1/gifs/search?api_key=pU1AOe3qYX87OeCWYssTEB60REos6lfJ&q=${category}&limit=10`;
	//
	//	const resp = await fetch(url);
	//	const { data } = await resp.json();
	//
	//	const gifs = data.map((img) => ({
	//		id: img.id,
	//		title: img.title,
	//		url: img.images.downsized_medium.url,
	//	}));

	//console.log(gifs);

	return images;
};
