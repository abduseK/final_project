import "./home.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import Hero from "../../components/Hero/Hero.jsx";
import Services from "../3.services/services.jsx";
import Statistics from "../../components/StatComponent/Stat.jsx";
import DataPost from "../../components/DataPost/DataPost";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <AnimatedPage>
      <Hero />
      <Services />
      <Statistics />
      <DataPost />
      <Footer />
      <Routes>
        <Route path="/services" Component={Services} />
      </Routes>
    </AnimatedPage>
  );
}
