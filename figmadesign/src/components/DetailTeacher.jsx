import "../styles/DetailTeacher.css"
import teacherImg from "../assets/BG.png";
import facebookIcon from "../assets/facebook.PNG";
import instagramIcon from "../assets/instagram.PNG";
import twitterIcon from "../assets/twitter.PNG";
import linkedlinIcon from "../assets/linkedling.PNG";
import courseImg1 from "../assets/Rectangle19.png";
import courseImg2 from "../assets/Rectangle17.png";
import Navbar from "./Navbar";

const DetailTeacher = () => {
  return (
    <div className="teacher-top">
      <Navbar/>
        <h5> <span id="top">Home |Teacher |</span> Detail Teacher</h5>
    <div className="detail-teacher">
       <div className="teacher-profile">
         <img src={teacherImg} alt="Kristin Watson" className="profile-img" />
          <h2>Kristin Watson</h2>
          <div className="teacher-stats">
           <ul className="ul1">
            <li>Total Course</li>
            <li>Ratings</li>
            <li>Experiences</li>
            <li>Grauduated</li>
            <li>Language</li>
            <li>Social</li>
          </ul>
          <ul className="ul2">
             <li><span className="numb">30</span></li>
             <li><span className="start">★</span> 4.9 (<span className="numb">153</span>)</li>
             <li>10 years</li>
             <li>yes</li>
             <li>English, French</li>
             <li>
                   <div className="teacher-social">           
                  <img src={facebookIcon} alt="Facebook" />
                  <img src={instagramIcon} alt="Instagram" />
                 <img src={twitterIcon} alt="Twitter" />
                  <img src={linkedlinIcon} alt="Linkedlin" />
                 </div>
             </li>
          </ul>
          </div>
        </div>
      
      <div className="teacher-content">
         <div className="about">
           <h3>About Kristin</h3>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
             dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
              lacus vel facilisis consectetur adipiscing elit. 
           </p>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
             ipsum suspendisse ultrices gravida.
          </p>
         </div>

        <div className="certification">
          <h3>Certification</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
         </p>
       </div>

        <div className="detailcourses">
           <h3>Courses (2)</h3>

           <div className="grid2">
           <div className="detailcourse-card12">
             <img src={courseImg1} alt="Education course" />
             <div className="detailcourse-info12">
               <h4>Product Management Basic - Course</h4>
               <p>
                 Product Management Masterclass, you will learn with <br />Sarah Johnson -
                 Head of Product Customer Platform Gojek Indonesia.
               </p>
               <div className="price3">
                 <span className="discount3">$380</span>
                 <span className="original3">$500</span>
               </div>
             </div>
          </div>

           <div className="detailcourse-card12">
             <img src={courseImg2} alt="Notebook course"/>
               
             <div className="detailcourse-info12">
               <h4>Product Management Basic - Course</h4>
               <p>
                 Product Management Masterclass, you will learn with <br /> Sarah Johnson -
                Head of Product Customer Platform Gojek Indonesia.
              </p>
              <div className="price3">
                <span className="discount3">$380</span>
                <span className="original3">$500</span>
              </div>
            </div>
          </div>
          </div>
        </div>
       </div>
    </div>
    </div>
  );
}

export default DetailTeacher;