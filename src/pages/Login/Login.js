import React from 'react';
import './login.scss';

const Login = () => {
  return (
    <section className="section__signIn">
      <div>
        <p>Welcome</p>
        <h3>Sign In</h3>
      </div>
      <form>
        <label for="userName">User name</label>
        <input type="text" id="userName" placeholder="Enter your user name" />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <button>Sign In</button>
        <p>Don't have an account?</p>
      </form>
    </section>
  );
};

export default Login;
