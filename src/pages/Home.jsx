import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "./Services.jsx";
import Features from "./Features.jsx";
import About from "./About.jsx";
import FleetGallery from "./FleetGallery.jsx";
import Contact from "./Contact.jsx";

const Home = () => (
  <>
    <Navbar/>
     {/* HOME / HERO */}
    <section id="home" className="pt-20">
      <Hero />
    </section>

    {/* About */}
    <section id="about">
      <About />
    </section>

    {/* SERVICES */}
    <section id="services">
      <Services />
    </section>

    {/* Features */}
     <section id="features">
      <Features/>
    </section>

     {/* FleetGallery */}
     <section id="fleetGallery">
      <FleetGallery/>
    </section>

    {/*Contact */}
     <section id="contact">
      <Contact/>
    </section>
    
  </>
);

export default Home;
