import "../styles/Classes.css"
import teeatcherImg from "../assets/pexels.png";
import childImg from "../assets/portrait1.png";
import phoneImg from "../assets/CallButton.png";
import arrowImg from "../assets/arrow.png";
import audioIcon from "../assets/icon2.png";
import liveIcon from  "../assets/icon1.png";
import recordedIcon from "../assets/icon3.png";
const Classes = () => {
  return (
    <div className="classes">
      <div className="classes-text">
        <h2>What's in the class at Edudu?</h2>
        <p>
          Online classes with teachers, continuous questions and answers during
          class if you do <br /> not understand. At the end of the session, the lesson
          is recorded for your child to review.
        </p>
        <button className="trial-btn">Free trial lesson</button>
      </div>
      <div className="class-tuto">
       <div className="classes-bg">
        <div className="class-img">
             <div className="classes-image">
          <img src={childImg} alt="portrait" id="chid"/>
        </div>
         <div className="classes-image">
          <img src={phoneImg} alt="call" id="icon"/>
         </div>
         <div className="classes-image">
          <img src={arrowImg} alt="arrow" id="icon" />
         </div>
        </div>
        
      </div>
      </div>

        <div className="classes-icons">
        <div className="icon-card">
          <img src={audioIcon} alt="Audio Classes" />
          <span>Audio Classes</span>
        </div>
        <div className="icon-card">
          <img src={liveIcon} alt="Live Classes" />
          <span>Live Classes</span>
        </div>
        <div className="icon-card">
          <img src={recordedIcon} alt="Recorded Class" />
          <span>Recorded Class</span>
        </div>
      </div>
    </div>
  )
}

export default Classes
