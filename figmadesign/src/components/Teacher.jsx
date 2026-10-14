import jessica from "./../assets/Rectangle8.png";
import Henry from "../assets/Rectangle1.png";
import Flores from "../assets/Rectangle2.png";
import Shane from "../assets/Rectangle3.png";
import Courtney from "../assets/Rectangle4.png"
import leslie from "../assets/Rectangle5.png";
import jerome from "../assets/Rectangle6.png";
import Ariane from "../assets/Rectangle7.png";
import "../styles/Teacher.css"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Trade from "./Trade";
const Teacher = () => {
  return (
    <div className="teacher">
      <Navbar/>
      <h2>A team of experienced teachers at Edudu</h2>
    <div className="teacher-carousel">
      <Link to="/teacherdetail">
        <div className="teacher-card">
            <img src={jessica} alt="jessica" className="profile"/>
            <h3>Jassica Nephi</h3>
             <div className="stars">★★★★★</div>
            <p>5 years of experience teaching Math. 
             Currently working at Weston school.
            </p>
        </div>
        </Link>
         <div className="teacher-card">
            <img src={Henry} alt="henry" className="profile"/>
            <h3>Henry, Arthur</h3>
             <div className="stars">★★★★★</div>
            <p>10 years of experience teaching 
               English. Currently working at Weston 
              school.
           </p>
        </div>


         <div className="teacher-card">
            <img src={Flores} alt="flores" className="profile" />
            <h3>Flores, Juanita</h3>
             <div className="stars">★★★★★</div>
            <p>
                3 years of experience teaching Math. 
             Currently working at VinVi school.
           </p>
        </div>

         <div className="teacher-card">
            <img src={Shane} alt="shane" className="profile"/>
            <h3>Nguyen, Shane</h3>
             <div className="stars">★★★★★</div>
            <p>
                4 years of experience teaching Math. 
               Currently working at Wing school.
            </p>
        </div>

         <div className="teacher-card">
            <img src={Courtney} alt="courtney" className="profile" />
            <h3>Courtney Henry</h3>
             <div className="stars">★★★★★</div>
            <p>
                5 years of experience teaching Math. 
                Currently working at Weston school.
            </p>
        </div>

        <div className="teacher-card">
            <img src={leslie} alt="leslie" className="profile"/>
            <h3>Leslie Alexander</h3>
             <div className="stars">★★★★★</div>
            <p>
                10 years of experience teaching 
                English. Currently working at Weston 
              school.
            </p>
        </div>

     <div className="teacher-card">
            <img src={jerome} alt="jerome" className="profile"/>
            <h3>Jerome Bell</h3>
             <div className="stars">★★★★★</div>
            <p>3 years of experience teaching Math. 
               Currently working at VinVi school.
            </p>
        </div>

         <div className="teacher-card">
            <img src={Ariane} alt="arlene" className="profile"/>
            <h3>Arlene McCoy</h3>
             <div className="stars">★★★★★</div>
            <p>
                4 years of experience teaching Math. 
                Currently working at Wing school
            </p>
        </div>       
      </div>
      <Trade/>
    </div>
  )
}

export default Teacher
