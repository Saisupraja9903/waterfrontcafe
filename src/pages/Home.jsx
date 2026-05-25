import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SEO from "../components/SEO";
import "../responsive.css";



const Home = () => (
  <main>
    <SEO title="Cafe Bar Bistro in Benson" description="Waterfront Cafe is a relaxed riverside cafe, bar and bistro in Benson serving breakfast, main menu dishes, drinks and cakes." />
    <Hero />
    <AboutSection />

    
  </main>
);

export default Home;
