import SEO from "../components/SEO";
import PageBanner from "../components/layout/PageBanner";
import Container from "../components/layout/Container";

const Terms = () => (
  <main>
    <SEO title="Terms & Conditions" description="Waterfront Cafe website terms and conditions." />
    <PageBanner title="Terms & Conditions" eyebrow="Legal" text="Website usage and booking request terms." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80" />
    <section className="section legal-page"><Container><h2>Website Terms</h2><p>Website content is provided for general information. Menus, prices, opening hours and availability can change without notice.</p><p>Booking forms submit requests only. A reservation is confirmed when the Waterfront Cafe team contacts you to confirm the details.</p><p>External links are provided for convenience and are governed by the policies of those third-party services.</p></Container></section>
  </main>
);

export default Terms;
