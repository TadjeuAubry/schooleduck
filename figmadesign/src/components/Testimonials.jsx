import "../styles/Testimonials.css";
import jassicaImg from "../assets/1.png";
import darleneImg from "../assets/2.png";
import dianneImg from "../assets/3.png";
const Testimonials = () => {
  return (
    <div className="testimonials">
         <h2>What do students say about Edudu?</h2>

      <div className="testimonial-carousel">
       
        <button className="arrow left">‹</button>

        <div className="testimonial-card">
          <img src={jassicaImg} alt="Jassica Andrew" className="profile" />
          <h3>Jassica Andrew</h3>
          <div className="stars">★★★★★</div>
          <p>
            My child has improved a lot after finishing school. Thank you very
            much Edudu.
          </p>
        </div>

        <div className="testimonial-card"id="robert">
          <img src={darleneImg} alt="Darlene Robertson" className="profile" />
          <h3>Darlene Robertson</h3>
          <div className="stars">★★★★★</div>
          <p>
            My child knows how to write very good essays. English ability is
            also much better. The cost is very cheap, so you should register.
            Thank you very much Edudu.
          </p>
        </div>

        <div className="testimonial-card">
          <img src={dianneImg} alt="Dianne Russell" className="profile" />
          <h3>Dianne Russell</h3>
          <div className="stars">★★★★★</div>
          <p>
            My child has improved a lot after finishing school. Thank you very
            much Edudu.
          </p>
        </div>

        <button className="arrow right">›</button>
      </div>
    </div>
  )
}

export default Testimonials
