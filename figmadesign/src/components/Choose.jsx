import teacherImage from "../assets/h1.png";
import programImage from "../assets/h2.png";
import costImage from "../assets/h3.png";
import "../styles/Choose.css";
const Choose = () => {
  return (
    <div className="choose">
        <div className="choose-color1">
        <h2>Why should you choose Edudu?</h2>
        </div>
        <div className="choose-color"></div>
      <div className="choose-grid">
        <div className="choose-card">
            <img src={teacherImage} alt="teacher" />
            <h3>Experienced teacher</h3>
            <p>
                Instructors from all over Vietnam 
                 and around the world, providing 
                   quality learning experiences and 
                    helping students develop their full 
                      potentia
            </p>
        </div>

        <div className="choose-card">
            <img src={programImage} alt="program" />
            <h3>Creative program</h3>
            <p>Flexible payment, suitable to 
                 personal financial situation and 
                study schedule. Pay monthly, by 
               course or “study now, pay later”
            </p>
        </div>

        <div className="choose-card">
            <img src={costImage} alt="cost" />
            <h3>Appropriate cost</h3>
            <p>Thiết kế giáo trình dựa trên năng lực 
                và nhu cầu từng học viên, hoạt động 
                     học tập hấp dẫn, tương tác 2 chiều 
                   liên tục
            </p>
        </div>
      </div>
    </div>
  );
}

export default Choose;
