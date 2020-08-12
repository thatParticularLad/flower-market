import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import './App.css';
import Posts from './Posts/Posts';
import { db } from './firebase';

function App() {
	const [posts, setPosts] = useState([]);

	// useEffect - runs a piece of code based on a specific condition (so a listener)
	useEffect(() => {
		// adds a listener (onSnapshot) on the database entity for posts
		db.collection('posts').onSnapshot((snapshot) => {
			// every time a new post is added, this code fires
			// docs - all posts( because thats the collection we've chosen above)
			setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
		});
	}, []);

	return (
		<div className="app">
			<Header />
			<Posts posts={posts} />
		</div>
	);
}

export default App;
