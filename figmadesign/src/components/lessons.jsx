import "../styles/lessons.css";
import mathIcon from "../assets/Frame4.png";
import literatureIcon from "../assets/Frame1.png";
import englishIcon from "../assets/Frame2.png";
import artIcon from "../assets/Frame3.png";

const lessons = () => {
  return (
    <div className="lessons">
          <div className="lessons-text">
             <h2>Lessons revolve around 4 areas</h2>
              <p>Diverse lessons around 4 subjects: Math, literature, English, drawing help <br />
                 children improve their comprehensive knowledge
               </p>
          </div>
          <div className="lessons-grid">
            <div className="lessons-card">
               <img src={mathIcon} alt="Math icon" />
               <h3>Math</h3>
            </div>

            <div className="lessons-card">
               <img src={literatureIcon} alt="Literature icon" />
               <h3>Literature</h3>
            </div>

            <div className="lessons-card">
               <img src={englishIcon} alt="English icon" />
               <h3>English</h3>
            </div>

            <div className="lessons-card">
               <img src={artIcon} alt="Art icon" />
               <h3>Art</h3>
            </div>
          </div>
        </div>
  );
}

export default lessons;
