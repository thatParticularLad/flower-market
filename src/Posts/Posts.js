import React, { Component } from 'react';
import Post from '../Post/Post';
import './Posts.css';

class Posts extends Component {
	render() {
		return (
			<div className="posts">
				{this.props.posts.map((post, index) => (
					<Post key={post.username + post.flower} post={post} />
				))}
			</div>
		);
	}
}

export default Posts;
