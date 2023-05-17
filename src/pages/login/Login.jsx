import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
        <form className='loginForm'>
            <label>Email</label>
            <input type="text" className='loginInput' placeholder='Enter Your Email...' />
            <label>Password</label>
            <input type="text" className='loginInput' placeholder='Enter Your Password...' />
            <burron className="loginButton">Login</burron>
        </form>
        <button className='loginRegisterButton'>
          <Link to="/register" className="linkregister">Register</Link>
        </button>
    </div>
  )
}
