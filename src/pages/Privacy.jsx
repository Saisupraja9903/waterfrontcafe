import SEO from "../components/SEO";
import PageBanner from "../components/layout/PageBanner";
import Container from "../components/layout/Container";

const Privacy = () => (
  <main>
    <SEO title="Privacy Policy" description="Waterfront Cafe privacy policy." />
    <PageBanner title="Privacy Policy" eyebrow="Legal" text="How we handle enquiry and booking information." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80" />
    <section className="section legal-page"><Container><h2>Privacy Policy</h2><p>We only request the personal details needed to respond to enquiries, manage booking requests and operate the website. This can include your name, phone number, email address and message details.</p><p>We do not sell personal information. Contact details are used by the Waterfront Cafe team for service communication and retained only for as long as reasonably required.</p><p>For privacy questions, email info@waterfrontcafe.co.uk.</p></Container></section>
  </main>
);

export default Privacy;
