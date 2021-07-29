import { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const Giffy = () => {
	const [categories, setCategories] = useState([]);

	return (
		<>
			<h1>Giffy</h1>
			<AddCategory setCategories={setCategories} />
			<hr />
			<div className="container">
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</div>
		</>
	);
};

export default Giffy;
