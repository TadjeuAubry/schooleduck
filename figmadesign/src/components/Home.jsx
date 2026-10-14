import Hero from "./Hero";
import Lessons from "./../components/lessons";
import Benefits from "./Benefits";
import Choose from "./Choose";
import Classes from "./Classes";
import Testimonials from "./Testimonials";
import Questions from "./Questions";
import Trade from "./../components/Trade";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Lessons/>
      <Benefits/>
      <Choose/>
      <Classes/>
      <Testimonials/>
      <Questions/>
      <Trade/>
    </div>
  )
}

export default Home
