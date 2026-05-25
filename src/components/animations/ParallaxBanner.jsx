const ParallaxBanner = ({ image, children }) => (
  <section className="parallax-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 50, 67, .66), rgba(0, 50, 67, .56)), url(${image})` }}>
    {children}
  </section>
);

export default ParallaxBanner;
