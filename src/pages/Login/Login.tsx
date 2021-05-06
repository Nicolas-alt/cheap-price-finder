import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <section className="section__signIn">
      <div>
        <p>Welcome</p>
        <h3>Sign In</h3>
      </div>
      <form>
        <label htmlFor="userName">User name</label>
        <input type="text" id="userName" placeholder="Enter your user name" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <Link to="/user/home">Sign In</Link>
        <p>Don't have an account?</p>
      </form>
    </section>
  );
};

export default Login;
