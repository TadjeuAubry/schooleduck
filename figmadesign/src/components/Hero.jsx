import bobImg from "./../assets/light.png";
import heroImg from "../assets/h6.png";
import "./../styles/Hero.css";
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <img src={bobImg} alt="bob deco" className="hero-bob" />
            <h2>Knowledge Connection</h2>
            <h1>Open the Door to the Future</h1>
             <p>
            Giving every student the opportunity to access the best education and
            open the door to the world of knowledge. <br />Start your learning journey
            today with EduLab to become an outstanding student in our learning
            community.
        </p>

        <button className="hero-btn">Get started!</button>
        </div>
         <div className="hero-image">
          <img src={heroImg} alt="Student with book" className="hero-main" />
     </div>
    </div>
  );
}

export default Hero;



