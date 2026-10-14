import "../styles/DetailCourse.css"
import teacher from "../assets/Frame5.png";
import checkbox from "../assets/Checkbox.png";
import courseImg1 from "../assets/Rectangle19.png";
import courseImg2 from "../assets/Rectangle17.png";
import courseImg3 from "../assets/Rectangle13.png";
import profileleft from "../assets/h4.png";
import profileright from "../assets/h5.png";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
const DetailCourse = () => {
  return (
 <div className="detailcourse">
  <Navbar/>
    <h5><span className="hcdc">Home |Course |</span> Detail Course</h5>
    <div className="detailcourse-grid">
        <div className="detailcourse-card">
            <img src={teacher} alt="teacher" />
        </div>
        <div className="detailcourse-text">
            <h3>Maths - for Standard 3 Students | Episode 2</h3>
            <ul>
                <li>Number of lessons: <span className="time">49 Lesson</span> <span className="viewdetail">View detail</span></li>
                <li>Completion time: <span className="time">1 Month</span> </li>
                <li>Teacher: <span className="viewdetail"> Jassia Andrew</span></li>
                <li>Students have learned: <span className="time">12,000+</span></li>
                <li>Review: <span className="start1">★★★★★</span></li>
                <li>Price: <span className="time">200$</span></li>
            </ul>
            <div className="freetrial">
                <button id="addbtn">Add to cart</button>
                <button id="freebtn">Free trial lesson</button>
            </div>
        </div>
    </div>
    <div className="course-content">
        <div className="about2">
            <h3>Course Details</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas 
                accumsan lacus vel facilisis consectetur adipiscing elit. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas 
                accumsan.
            </p>
        </div>
        <div className="certificate">
            <h3>Certification</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas 
                accumsan lacus vel facilisis consectetur adipiscing elit.
            </p>
        </div>
        <div className="who">
            <h3>Who this course is for</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas 
                accumsan lacus vel facilisis consectetur adipiscing elit.
            </p>
        </div>

        <div className="benefits-text1">
            <h3>What you'll learn in this course:</h3>
                      <ul>
                            <li> <span className="chb1">
                                  <img src={checkbox} alt="checkbox" className="check1" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </span>
                            </li>
                            <li> 
                                <span className="chb1">
                                <img src={checkbox} alt="checkbox" className="check1" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </span>
                                
                            </li>
                            <li>
                                <span className="chb1">
                                <img src={checkbox} alt="checkbox" className="check1" />Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                            </li>
                             <li>
                                <span className="chb1">
                                <img src={checkbox} alt="checkbox" className="check1" />Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                            </li>
                        </ul>
        </div>
    </div>

      <div className="courses1">
              <div className="similar-top">
               <h3>Similar Courses </h3>
                <span>See more </span>
              </div>

            <div className="similar-grid">
               <div className="similarcourse-card">
                 <img src={courseImg1} alt="Education course" className="course-thumb1" />
                 <div className="course-info1">
                   <h4>Product Management <br /> Basic - Course</h4>
                   <p>
                     Product Management Masterclass, you will learn with Sarah Johnson -
                     Head of Product Customer Platform Gojek Indonesia.
                   </p>
                   <div className="price1">
                     <span className="discount1">$380</span>
                     <span className="original1">$500</span>
                   </div>
                 </div>
              </div>
    
               <div className="similarcourse-card">
                 <img src={courseImg2} alt="Notebook course" className="course-thumb1" />
                 <div className="course-info1">
                   <h4>Product Management <br /> Basic - Course</h4>
                   <p>
                     Product Management Masterclass, you will learn with  Sarah Johnson -
                    Head of Product Customer Platform Gojek Indonesia.
                  </p>
                  <div className="price1">
                    <span className="discount1">$380</span>
                    <span className="original1">$500</span>
                  </div>
                </div>
              </div>

              <div className="similarcourse-card">
                 <img src={courseImg3} alt="Education course" className="course-thumb1" />
                 <div className="course-info1">
                   <h4>Product Management <br /> Basic - Course</h4>
                   <p>
                     Product Management Masterclass, you will learn with Sarah Johnson -
                     Head of Product Customer Platform Gojek Indonesia.
                   </p>
                   <div className="price1">
                     <span className="discount1">$380</span>
                     <span className="original1">$500</span>
                   </div>
                 </div>
              </div>
            </div>
        </div>
        <div className="detailquestions">
              <div className="detailquestions-grid">
                <div className="detailquestions-card">
                  <img src={profileleft} alt="profile" />
                </div>
        
                <div className="detailquestions-card">
                  <h2>Do you still have any questions?</h2>
                  <p>Dont hesitate to leave us your phone number. e will contact you to 
                     discuss any questions you may have
                  </p>
                    
                    <div className="detailquestions-search">
                        <input type="searchbar" placeholder="Enter your phone number" id="searchinput2" />
                        <button id="searchbtn2">Subscribe</button>
                    </div>
                </div>
        
                <div className="detailquestions-card">
                  <img src={profileright} alt="profile" />
                </div>
        
            </div>
         </div>
   </div>
  )
}

export default DetailCourse
