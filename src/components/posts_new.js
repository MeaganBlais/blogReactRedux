import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
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
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate inputs from (value)
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters long!";
  }
  if (!values.categories) {
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }

  // if errors is empty, the form is fine to submit
  // if errors has any properties, redux form assumes form is invalid
  // console.log(errors)
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);