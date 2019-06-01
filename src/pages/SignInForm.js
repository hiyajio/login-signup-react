import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";

class SignInForm extends Component {
  render() {
    let {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;
    return (
      <form onSubmit={handleSubmit} className="FormField">
        <div className="FormField">
          <label className="FormFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id={!errors.email && touched.email && "success"}
            className={errors.email && touched.email && "error"}
            placeholder="Enter your email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div className="FormFieldError">{errors.email}</div>
          )}
          {!errors.email && touched.email && (
            <i class="success material-icons done_outline">done_outline</i>
          )}
        </div>

        <div className="FormField">
          <label className="FormFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id={!errors.password && touched.password && "success"}
            className={errors.password && touched.password && "error"}
            placeholder="Enter your password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* <i class="material-icons visibility">visibility_off</i> */}
          {errors.password && touched.password && (
            <div className="FormFieldError">{errors.password}</div>
          )}
          {!errors.password && touched.password && (
            <i class="success material-icons done_outline">done_outline</i>
          )}
        </div>

        <div className="FormField">
          <button
            className={
              !errors.email &&
              touched.email &&
              !errors.password &&
              touched.password &&
              "allow"
            }
            type="submit"
            disabled={isSubmitting}
          >
            Sign In
          </button>{" "}
          <Link to="/" className="FormFieldLink">
            Create an account
          </Link>
        </div>
      </form>
    );
  }
}

const EnhancedSignInForm = withFormik({
  mapPropsToValues: props => props.values,
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email must be valid.")
      .required("This is a required field."),
    password: Yup.string()
      .required("This is a required field.")
      .matches(
        /^[^\s]+(\s+[^\s]+)*$/,
        "Password cannot start or end with space/s."
      )
      .min(9, "Password too short - must be at least 9 characters.")
      .max(50, "Password too long - must be less than 50 characters.")
      .matches(/(?=.*[0-9])/, "Password must contain at least 1 number.")
      .matches(
        /(?=.*[A-Z])/,
        "Password must contain at least 1 uppercase character."
      )
      .matches(
        /(?=.*[a-z])/,
        "Password must contain at least 1 lowercase character."
      )
      .matches(
        /^[^\s]+(\s+[^\s]+)*$/,
        "Password cannot start or end with space/s."
      )
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values, setSubmitting);
  },
  displayName: "SignInForm"
})(SignInForm);

export default EnhancedSignInForm;
