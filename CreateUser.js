import React from "react";
import { Route } from "react-router-dom";

class CreateUser extends React.Component {
  state = { name: "" };
  render() {
    return (
      <div className="create-user">
        <div className="pure-g">
          <div className="pure-u-1">
            <h2>Welcome!</h2>
            <form
              className="pure-form pure-form-stacked"
              onSubmit={() => {
                this.props.createUser(this.state.name);
                this.props.history.push("/new-post");
                this.setState({ name: "" });
              }}
            >
              <label htmlFor="name">
                Please tell us your name to get started
              </label>
              <input
                className="pure-input-1"
                id="name"
                type="text"
                required
                onChange={event => this.setState({ name: event.target.value })}
                value={this.state.name}
              />
              <button type="submit" className="pure-button pure-button-primary">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const CreateUserPage = ({ createUser }) => (
  <Route
    exact
    path="/"
    component={props => <CreateUser createUser={createUser} {...props} />}
  />
);

export default CreateUserPage;
