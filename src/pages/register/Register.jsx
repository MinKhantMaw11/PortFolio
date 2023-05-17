import './register.css';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
        <form className='registerForm'>
            <label>UserName</label>
            <input type="text" className='registerInput' placeholder='Enter Your UserName...' />
            <label>Email</label>
            <input type="text" className='registerInput' placeholder='Enter Your Email...' />
            <label>Password</label>
            <input type="text" className='registerInput' placeholder='Enter Your Password...' />
            <burron className="registerButton">Register</burron>
        </form>
        <button className='registerLoginButton'>
        <Link to="/login" className="linklogin">Login</Link>
        </button>
    </div>
  )
}
