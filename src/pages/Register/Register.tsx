import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  return (
    <div className="register___container">
      <div className="text-container">
        <h3>Register</h3>
      </div>
      <form>
        <label htmlFor="UserName">User Name:</label>
        <input type="text" id="UserName" />
        <label htmlFor="Email">Email:</label>
        <input type="email" id="Email" />
        <label htmlFor="Password">Password:</label>
        <input type="password" id="Password" />
        <label htmlFor="PasswordConfirm">Confirm Password</label>
        <input type="password" id="PasswordConfirm" />
        <Link to="/auth/login">Register</Link>
        <p>Already have an account?</p>
      </form>
    </div>
  );
};

export default Register;
