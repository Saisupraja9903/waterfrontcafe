import Hero from "../components/Hero";
import HoursBanner from "../components/HoursBanner";
import AboutSection from "../components/AboutSection";
import SEO from "../components/SEO";
import "../responsive.css";

import Container from "../components/layout/Container";
import SectionTitle from "../components/layout/SectionTitle";
import AnimatedWave from "../components/layout/AnimatedWave";
import FadeInSection from "../components/animations/FadeInSection";
import FoodCard from "../components/ui/FoodCard";
import GalleryCard from "../components/ui/GalleryCard";
import TestimonialCard from "../components/ui/TestimonialCard";
import Button from "../components/ui/Button";
import { galleryImages, testimonials } from "../data/siteData";

const highlights = [
  {
    title: "Fresh seasonal cooking",
    text: "Thoughtfully prepared dishes and comforting classics served with an easygoing, relaxed finish.",
  },
  {
    title: "Riverside dining charm",
    text: "A warm setting for breakfast, lunch, drinks and lingering moments with the Thames just beyond.",
  },
  {
    title: "Family-friendly comfort",
    text: "A welcoming space for little ones, dogs, and everyone looking for a polished, easy visit.",
  },
];

const Home = () => (
  <main>
    <SEO title="Cafe Bar Bistro in Benson" description="Waterfront Cafe is a relaxed riverside cafe, bar and bistro in Benson serving breakfast, main menu dishes, drinks and cakes." />
    <Hero />
    {/* <HoursBanner /> */}
    <AboutSection />

    {/* <FadeInSection className="section quality-strip">
      <Container>
        <div className="quality-strip-grid">
          {highlights.map((item) => (
            <article key={item.title} className="quality-strip-card">
              <p className="quality-strip-label">Waterfront detail</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </FadeInSection>

    <FadeInSection className="section light-section">
      <Container>
        <SectionTitle eyebrow="Menus" title="Fresh food from breakfast through supper" text="Easygoing plates, riverside drinks and sweet treats served with a view." />
        <div className="food-grid">
          <FoodCard image="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80" title="Breakfast" text="Full breakfasts, pancakes, pastries and coffee from 08:30." to="/breakfast" />
          <FoodCard image="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80" title="Main Menu" text="Burgers, salads, fish, pasta, children’s dishes and daily specials." to="/menu" />
          <FoodCard image="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80" title="Drinks" text="Wine, beer, cocktails, soft drinks, speciality teas and barista coffee." to="/drinks" />
        </div>
      </Container>
    </FadeInSection>

    <AnimatedWave />

    <FadeInSection className="section gallery-preview">
      <Container>
        <SectionTitle eyebrow="Gallery" title="A waterside place to settle in" />
        <div className="gallery-grid preview">
          {galleryImages.slice(0, 4).map((src, index) => <GalleryCard key={src} src={src} index={index} />)}
        </div>
        <div className="center-actions"><Button to="/gallery">Open gallery</Button></div>
      </Container>
    </FadeInSection>

    <FadeInSection className="section testimonials-section">
      <Container>
        <SectionTitle eyebrow="Kind words" title="Guests come back for the feeling" />
        <div className="testimonial-grid">
          {testimonials.map((item) => <TestimonialCard key={item.name} item={item} />)}
        </div>
      </Container>
    </FadeInSection> */}
  </main>
);

export default Home;
