import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FindUs = () => (
  <>
    <Navbar />
    <section className="find-us">
      <h2>Find Us</h2>
      <p>A4074 Benson Waterfront, Wallingford, Oxfordshire, OX10 6SJ</p>
      <iframe
        title="Waterfront Café Map"
        src="https://maps.google.com/maps?q=Waterfront+Cafe+Benson&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </section>
    <Footer />
  </>
);

export default FindUs;