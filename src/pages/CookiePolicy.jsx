import SEO from "../components/SEO";
import PageBanner from "../components/layout/PageBanner";
import Container from "../components/layout/Container";

const CookiePolicy = () => (
  <main>
    <SEO
      title="Cookie Policy"
      description="Waterfront Cafe cookie policy."
    />

    <PageBanner
      title="Cookie Policy"
      eyebrow="Legal"
      text="How cookies and embedded services may be used on this website."
      image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
    />

    <section className="section legal-page">
      <Container>

        <h2>Cookie Policy</h2>

        <p>
          This Cookie Policy explains how Waterfront Cafe uses cookies
          and similar technologies when you visit our website.
          By continuing to browse or use our website, you agree to the
          use of cookies as described in this policy.
        </p>

        <h2>What Are Cookies?</h2>

        <p>
          Cookies are small text files stored on your device when
          you visit a website. They help websites function properly,
          improve user experience, remember preferences, and provide
          website usage information.
        </p>

        <h2>Types of Cookies We May Use</h2>

        <h3>Essential Cookies</h3>

        <p>
          These cookies are necessary for the website to operate
          correctly. They enable basic functionality such as page
          navigation, security, and access to certain areas of the site.
        </p>

        <h3>Performance and Analytics Cookies</h3>

        <p>
          These cookies help us understand how visitors interact with
          our website by collecting anonymous information such as page
          visits, traffic sources, and user behavior.
        </p>

        <h3>Functionality Cookies</h3>

        <p>
          These cookies allow the website to remember choices you make,
          such as location preferences or previously entered details,
          to improve your browsing experience.
        </p>

        <h3>Third-Party Cookies</h3>

        <p>
          Some pages on our website may contain embedded content or
          services from third parties such as:
        </p>

        <ul>
          <li>Google Maps</li>
          <li>Social media links</li>
          <li>External booking or contact services</li>
          <li>Embedded videos or media</li>
        </ul>

        <p>
          These services may place their own cookies which are controlled
          by the respective third-party providers.
        </p>

        <h2>Managing Cookies</h2>

        <p>
          Most web browsers allow you to manage or disable cookies
          through browser settings. You can choose to block or delete
          cookies at any time.
        </p>

        <p>
          Please note that disabling certain cookies may affect website
          functionality and some features may not work properly.
        </p>

        <h2>Updates to This Policy</h2>

        <p>
          We may update this Cookie Policy from time to time to reflect
          changes in legal requirements or website functionality.
          Any updates will be posted on this page.
        </p>

        <h2>Contact Us</h2>

        <p>
          If you have any questions regarding this Cookie Policy,
          please contact Waterfront Cafe using the details provided
          on our Contact page.
        </p>

      </Container>
    </section>
  </main>
);

export default CookiePolicy;