import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Home
          </Link>
        </div>
        <form>
          <Field
            name="title"
            component={this.renderTitleField}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);