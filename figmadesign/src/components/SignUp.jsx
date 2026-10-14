import "../styles/SignUp.css"
import Navbar from "./Navbar";

const SignUp = () => {
  return (
    <div className="Sign2">
        <Navbar/>
    <div className='auth-container12'>
        <h2>Sign Up</h2>

        <form action="">
            <input type="text" placeholder='Full Name' required />
            <input type="email" placeholder='Email' required/>
            <input type="password" placeholder='Password' required/>
            <input type="password" placeholder='Confirm Password' required/>
            <button type='Submit'>Sign Up</button>
        </form>
        <p>
             Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;


