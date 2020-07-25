import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Post.css';

class Post extends Component {
	render() {
		const post = this.props.post;
		return (
			<div className="post-container">
				<div className="post-header">
					<Avatar
						className="post-avatar"
						src="/static/images/avatar/1.jpg"
						alt={post.username}
					/>
					<p>{post.username}</p>
				</div>
				<img className="post-image" src={post.image}></img>
				<div className="description-container">
					<p className="post-price">{post.price + ' €'}</p>
					<p className="post-flower">{post.flower}</p>
					<p className="post-description">{post.description}</p>
				</div>
			</div>
		);
	}
}

export default Post;
