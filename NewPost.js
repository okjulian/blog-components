import React from "react";
import ContentEditable from "react-contenteditable";
import { Route } from "react-router-dom";

class NewPost extends React.Component {
  state = {
    title: "<h2>Title</h2>",
    content: "<div class='post-content'>Tell your story...</div>"
  };
  render() {
    return (
      <div className="new-post">
        <h2>New post</h2>
        <div className="post">
          <div className="post-meta pure-g">
            <div className="pure-u-3-4 meta-data">
              <a className="author">
                {this.props.user && this.props.user.name}
              </a>
            </div>
          </div>
          <form
            onSubmit={() => {
              this.props.createPost({
                title: parseText(this.state.title),
                content: parseText(this.state.content)
              });
              this.props.history.push("/posts");
              this.setState({
                title: "<h2>Title</h2>",
                content: "<div class='post-content'>Tell your story...</div>"
              });
            }}
          >
            <ContentEditable
              html={this.state.title}
              disabled={false}
              onChange={event => this.setState({ title: event.target.value })}
            />
            <ContentEditable
              html={this.state.content}
              disabled={false}
              onChange={event => this.setState({ content: event.target.value })}
            />
            <div className="create-post-buttons">
              <button type="submit" className="pure-button pure-button-primary">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function parseText(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent;
}

const NewPostPage = ({ user, createPost }) => (
  <Route
    path="/new-post"
    component={props => (
      <NewPost user={user} createPost={createPost} {...props} />
    )}
  />
);

export default NewPostPage;
