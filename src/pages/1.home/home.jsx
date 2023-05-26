import "./home.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import Hero from "../../components/Hero/Hero.jsx";
import Services from "../3.services/services.jsx";
import Statistics from "../../components/StatComponent/Stat.jsx";
export default function Home() {
  return (
    <AnimatedPage>
      <Hero />
      <Services />
      <Statistics />
      <Routes>
        <Route path="/services" Component={Services} />
      </Routes>
    </AnimatedPage>
  );
}
