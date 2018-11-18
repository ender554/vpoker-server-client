import React from "react";
import { Field, reduxForm } from 'redux-form';
import './login.css';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (

    <form onSubmit={handleSubmit}>
      <div>Create Account or Log In</div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;