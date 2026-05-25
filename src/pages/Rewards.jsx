import SEO from "../components/SEO";
import logo from "../assets/logo.png";
import styles from "./Rewards.module.css";

const Rewards = () => (
  <main className="reference-page rewards-page">
    <SEO title="Rewards Card" description="Waterfront Cafe rewards card information." />
    <section className="rewards-section">
      <h1>The Waterfront Cafe Rewards Card</h1>
      <h2>Collect points every time you spend, and it's free to join.</h2>
      <div className="reward-card-preview">
        <img src={logo} alt="Waterfront Cafe" />
        <strong>Reward Card</strong>
        <p>Ask the team for details on your next visit.</p>
      </div>
    </section>

    <section className={styles.formSection}>
      <h2 className={styles.formTitle}>Sign Up Today</h2>
      <form className={styles.signUpForm} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>First name</label>
          <input type="text" className={styles.input} required />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Last name</label>
          <input type="text" className={styles.input} required />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" className={styles.input} required />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Phone</label>
          <input type="tel" className={styles.input} required />
        </div>

        <div className={styles.checkboxContainer}>
          <div className={styles.checkboxItem}>
            <input type="checkbox" id="consent" className={styles.checkbox} required />
            <label htmlFor="consent" className={styles.checkboxLabel}>
              I would like to receive news, event invites and special offers from Waterfront Cafe via email.
            </label>
          </div>
          <p className={styles.importantText}>
            Please allow a few days for your application to be processed.
          </p>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Application
        </button>
      </form>
    </section>
  </main>
);

export default Rewards;
