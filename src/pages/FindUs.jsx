import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import SEO from "../components/SEO";
import PageBanner from "../components/layout/PageBanner";
import Container from "../components/layout/Container";
import ContactCard from "../components/ui/ContactCard";
import { contactDetails } from "../data/siteData";

const FindUs = () => (
  <main>
    <SEO title="Find Us" description="Find Waterfront Cafe at A4074 Benson Waterfront, Wallingford, Oxfordshire." />
    <PageBanner title="Find Us" eyebrow="Visit" text="Pull in from the A4074 and settle by the river." image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80" />
    <section className="section">
      <Container>
        <div className="contact-grid">
          <ContactCard icon={<FiMapPin />} title="Address">{contactDetails.address}</ContactCard>
          <ContactCard icon={<FiPhone />} title="Phone">{contactDetails.phone}</ContactCard>
          <ContactCard icon={<FiClock />} title="Opening Hours">Open daily from 08:30 AM to 19:00 PM</ContactCard>
        </div>
        <iframe className="map-frame" title="Waterfront Cafe Map" src="https://maps.google.com/maps?q=Waterfront+Cafe+Benson&output=embed" loading="lazy" allowFullScreen />
      </Container>
    </section>
  </main>
);

export default FindUs;
