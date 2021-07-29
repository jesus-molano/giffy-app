import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
	const { gifs, loading } = useFetchGifs(category);
	return (
		<div className='gifs animate__animated animate__fadeIn'>
			<h3>{category}</h3>
			{loading && <p className="animate__animated animate__flash">Loading...</p>}
			<div className='card-grid'>
				{gifs.map(({ id, title, url }) => (
					<GifGridItem key={id} title={title} url={url} />
				))}
			</div>
		</div>
	);
};

export default GifGrid;
