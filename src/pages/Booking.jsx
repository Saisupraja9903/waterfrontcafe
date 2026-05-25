import SEO from "../components/SEO";
import PageBanner from "../components/layout/PageBanner";
import Container from "../components/layout/Container";
import SectionTitle from "../components/layout/SectionTitle";
import BookingForm from "../components/ui/BookingForm";

const Booking = () => (
  <main>
    <SEO title="Reservations" description="Request a reservation at Waterfront Cafe Benson with date, time, guest count and contact details." />
    <PageBanner title="Reservations" eyebrow="Book a table" text="Walk-ins are welcome, and booking requests help us prepare for busier moments." image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80" />
    <section className="section">
      <Container className="narrow">
        <SectionTitle title="Request a booking" text="Share your preferred date, time and guest count. The team will confirm availability." />
        <BookingForm />
      </Container>
    </section>
  </main>
);

export default Booking;
