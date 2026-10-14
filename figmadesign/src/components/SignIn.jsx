import "../styles/SignIn.css";
import Navbar from "./Navbar";

const SignIn = () => {
  return (
    <div className="Sign">
        <Navbar/>
    <div className='auth-container'>
        <h2>Sign In</h2>
        <form action="">
            <input type="email" placeholder='Enter Your Email' required/>
            <input type="password" placeholder='password' required />
            <button type='submit'>Sign In</button>
        </form>
        <p>
            Don't have an account? <a href="/signup">Sin Up</a>
        </p>
      </div>
    </div>
  )
}

export default SignIn;
