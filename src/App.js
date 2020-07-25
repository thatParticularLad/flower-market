import React, { useState } from 'react';
import Header from './Header/Header';
import './App.css';
import Posts from './Posts/Posts';

function App() {
	const [posts, setPosts] = useState([
		{
			// avatar: 'duck1.jpg',
			username: 'Ben Davidson',
			image: 'sunflowers.jpg',
			flower: 'Black Dafodil',
			price: 20,
			description: 'a wonderful flower',
		},
		{
			// avatar: 'goose.jpg',
			username: 'David Henty',
			image: 'sunflowers.jpg',
			flower: 'Sunflower Van Gogh',
			price: 10000,
			description: 'a wonderful sunflower',
		},
	]);

	return (
		<div className="app">
			<Header />
			<Posts posts={posts} />
			{/* Posts */}
		</div>
	);
}

export default App;
