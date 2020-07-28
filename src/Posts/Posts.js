import React, { Component } from 'react';
import Post from '../Post/Post';
import './Posts.css';

class Posts extends Component {
	render() {
		return (
			<div className="posts">
				{this.props.posts.map((post, id) => (
					<Post key={id} post={post} />
				))}
			</div>
		);
	}
}

export default Posts;
