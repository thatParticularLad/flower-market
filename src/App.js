import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import SignInForm from './SignIn/SignInForm'
import SignUpForm from './SignUp/SignUpForm'
import NewPost from './NewPost/NewPost'
import UserPost from './components/userpostComponent'
import './App.css';
import Posts from './Posts/Posts';
import { db } from './firebase';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	

	return (
		<Router>
			<div className="app">
				<Header />
				
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/register" component={SignUpForm} />
					<Route path="/login" component={SignInForm} />
					<Route path="/new-post" component={NewPost} />
					<Route path="/post/:postId" component={UserPost} />
				</Switch>
				
			</div>
		</Router>
	);
}

function Home(){
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
	
	return(
	<div>
		<Posts posts={posts}/>
	</div>
	)
	
};

export default App;
