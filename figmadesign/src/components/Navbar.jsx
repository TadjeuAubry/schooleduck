import { Link } from "react-router-dom";
import Framelogo from "./../assets/Framelogo.png";
import "./../styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Framelogo} alt="Edudu" />
          </Link>
        </div>
        <nav>
          <div className={`nav-link ${isopen ? 'open' : ''}`}>
            <svg onClick={() => setIsopen(false)} className="menubar" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#111"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" /></svg>

            <ul>
              <li><Link to="/" >Home</Link></li>

              <li  className="dropdown" >
                 <button
                   className="course" onClick={() => setDropdownOpen(!dropdownOpen)} > 
                  <Link to="/courses/all">
                    Course
                  </Link>
                  <span className="dropdown"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                  </span>
                  </button>

                  {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/all">All Courses</Link></li>
                    <li><Link to="/courses/math">Math Courses</Link></li>
                    <li><Link to="/courses/literature">Literature Courses</Link></li>
                    <li><Link to="/courses/english">English</Link></li>
                    <li><Link to="/courses/french">French</Link></li>
                  </ul>
                )}
                
              </li>
              <li><Link to="/teacher">Teacher</Link></li>
              <li><Link to="/how-to-use" >How to use</Link></li>
              <li><Link to="/About">About Us</Link></li>
            </ul>
            <div className="action">
               <Link to="/signup"><button className="signup-btn">Sign up</button></Link>
               <Link to="/signin"><button className="login-btn">Log in</button></Link>
            </div>
          </div>
          <svg className="menubar" onClick={() => setIsopen(true)} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#111"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>
        </nav>

      </div>
    </div>
  );
}

export default Navbar;



