import React, { useState } from "react";
import Trade from "../components/Trade"
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Course.css";
import courses from "./coursesData";

import  childImg from "../assets/h8.png";
import abeille from "../assets/abeille.PNG";
import cartIcon from "../assets/Group1.png";


const CourseCard = ({ image, title, description, discount, original }) => (
  <Link to="/coursedetail" >
  <div className="course-card">
    <img src={image} alt={title} className="course-img" />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="course-info">
      <div className="price">
        <span className="discount">${discount}</span>
        <span className="original">${original}</span>
      </div>
      <img src={cartIcon} alt="Add to cart" className="cart-icon" />
    </div>
  </div>
  </Link>
);

const Course = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter by category

  let filteredCourses = courses;
  if (category === "math") {
    filteredCourses = courses.filter(c => c.category === "Math");
  } else if (category === "literature") {
    filteredCourses = courses.filter(c => c.category === "Literature");
  } else if (category === "all") {
    filteredCourses = courses;
  } else {
    return <h2>No courses available for {category}</h2>;
  }

  // Apply search filter
  filteredCourses = filteredCourses.filter(c =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by category so we can show section titles
  
  const grouped = filteredCourses.reduce((acc, course) => {
    acc[course.category] = acc[course.category] || [];
    acc[course.category].push(course);
    return acc;
  }, 
  {});

  return (
    <div className="courses">
      <Navbar />
      <h5>Home | Pricing</h5>
            
         <div className="courses-grid">
            <div className="courses-text">
             <h2>Edudu offers you a 30% <br />
                discount this season             </h2>
             <p>Promotion valid from May 1, 2023 - June 30, 2023</p>      
               <img src={abeille} alt="abeille" className="abl"/>
               <button className="btn">Explore now</button>        
            </div>
         <div className="offer-image">
               <img src={childImg} alt="child" />
           </div>
        </div>
             <div className="courses-list">
           <div className="list-card">
        <ul>
          <li><Link to="/courses/all">All Courses</Link></li>
          <li><Link to="/courses/math">Math</Link></li>
          <li><Link to="/courses/literature">Literature </Link></li>
            <li><Link to="/courses/english">English</Link></li>
            <li><Link to="/courses/french">French</Link></li>
       </ul>
      </div>       
    </div>
      

      {/* Search bar */}
      <div className="courses-search">
        <input
          type="text"
          placeholder="Enter Search Course, Teacher name"
          id="searchinput1"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button id="searchbtn1"><img src={cartIcon} alt="icon" /></button>
        <button id="sortbtn"><span className="sortbtn">Sort by:</span> Latest</button>
      </div>

      {/* grouped sections */}
      <div className="courses-container">
        {Object.keys(grouped).map(cat => (
          <div key={cat}>
            <div className="container-top">
              <h2>{cat} Courses</h2>
              <span className="see"><Link to={`/courses/${cat.toLowerCase()}`}>See more</Link></span>
            </div>
            <div className="course-flex">
              {grouped[cat].map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Trade/>
    </div>
  );
};

export default Course;
