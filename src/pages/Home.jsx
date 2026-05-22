// import Hero from "../components/Hero";
// import HoursBanner from "../components/HoursBanner";
// import AboutSection from "../components/AboutSection";

// const Home = () => (
//   <main>
//     <Hero />
//     <HoursBanner />
//     <AboutSection />
//   </main>
// );

// export default Home;




import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HoursBanner from "../components/HoursBanner";
import AboutSection from "../components/AboutSection";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {

  const currentScroll = window.scrollY;

  const heroHeight = window.innerHeight;

  // SHOW AT TOP
  if (currentScroll < 100) {
    setShowNavbar(true);
  }

  // HIDE WHEN HERO REACHES HALF
  else if (currentScroll > heroHeight * 0.5) {

    // SCROLL DOWN
    if (currentScroll > lastScrollY.current) {
      setShowNavbar(false);
    }

    // SCROLL UP
    else {
      setShowNavbar(true);
    }
  }

  lastScrollY.current = currentScroll;
};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="home-page">

      {/* STICKY HEADER */}
      <header
        className={`sticky-navbar ${
          showNavbar ? "navbar-show" : "navbar-hide"
        }`}
      >
        <div className="top-intro">
          <Navbar />
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <Hero />
      </section>

      {/* HOURS */}
      {/* <section className="hours-section">
        <HoursBanner />
      </section> */}

      {/* ABOUT */}
      <section className="about-section-wrapper">
        <AboutSection />
      </section>

    </main>
  );
};

export default Home;