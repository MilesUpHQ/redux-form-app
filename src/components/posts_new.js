import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-error" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField} />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field name="content" label="Content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values);
  const errors = {};
  // if errors is empty - form is fine to submit
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (values.title && values.title.length < 3) {
    errors.title = "Title must be at least 3 chars";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
