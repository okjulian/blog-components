import React from "react";
import { Route } from "react-router-dom";

class Posts extends React.Component {
  render() {
    return (
      <div className="posts">
        <h2>Your posts</h2>
        {this.props.posts.map(post => (
          <div className="post">
            <div className="post-meta pure-g">
              <div className="pure-u-3-4 meta-data">
                <a className="author">{post.author && post.author.name}</a>
              </div>
            </div>
            <h2>{post.title}</h2>
            <div className="post-content">{post.content}</div>
          </div>
        ))}
      </div>
    );
  }
}

const PostsPage = ({ posts }) => (
  <Route
    path="/posts"
    component={props => <Posts posts={posts} {...props} />}
  />
);

export default PostsPage;
