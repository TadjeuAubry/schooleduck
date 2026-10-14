import logo from "../assets/Framelogo.png";
import facebook from "../assets/facebook.PNG";
import twitter from "../assets/twitter.PNG";
import linkedlin from "../assets/linkedling.PNG";
import "../styles/Trade.css"

const trade = () => {
  return (
    <div className="footer">
        
      <div className="footer-links">

        <div className="footer-top">
           <div className="footer-logo">
            <img src={logo} alt="Edudu" />
           </div>
           <div className="footer-social">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedlin} alt="linkedlin" />
           </div>
        <div className="footer-bottom">
        <p>©2020 Edudu.co</p>
        <p>Edudu is a registered <br />trademark of Edudu.co</p>
      </div>
        </div>

        <div className="footer-column">
          <h3>Courses</h3>
          <ul>
            <li>Classroom courses</li>
            <li>Virtual classroom courses</li>
            <li>E-learning courses</li>
            <li>Video courses</li>
            <li>Offline courses</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Community</h3>
          <ul>
            <li>Learners</li>
            <li>Partners</li>
            <li>Developers</li>
            <li>Transactions</li>
            <li>Blog</li>
            <li>Teaching Center</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick links</h3>
          <ul>
            <li>Home</li>
            <li>Professional Education</li>
            <li>Courses</li>
            <li>Admissions</li>
            <li>Testimonial</li>
            <li>Programs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>More</h3>
          <ul>
            <li>Press</li>
            <li>Investors</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default trade
