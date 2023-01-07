import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { ImageList } from './components/ImageList';

export const ImageLibraryApp = () => {
	const [categories, setCategories] = useState(['summer']);

	console.log(categories);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>ImageLibraryApp</h1>
			<AddCategory onNewCategory={(value) => onAddCategory(value)} />
			{categories.map((category) => (
				<ImageList
					key={category}
					category={category}
				/>
			))}
		</>
	);
};
