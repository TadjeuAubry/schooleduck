import "../styles/Questions.css";
import profileleft from "../assets/h4.png";
import profileright from "../assets/h5.png";
const Questions = () => {
  return (
    <div className="questions">
      <div className="questions-grid">
        <div className="questions-card">
          <img src={profileleft} alt="profile" />
        </div>

        <div className="questions-card">
          <h2>Do you still have any questions?</h2>
          <p>Dont hesitate to leave us your phone number. e will contact you to 
             discuss any questions you may have
          </p>
            
            <div className="questions-search">
                <input type="searchbar" placeholder="Enter your phone number" id="searchinput" />
                <button id="searchbtn">Subscribe</button>
            </div>
        </div>

        <div className="questions-card">
          <img src={profileright} alt="profile" />
        </div>

      </div>
    </div>
  )
}

export default Questions
