import SEO from "../components/SEO";
import PageBanner from "../components/layout/PageBanner";
import Container from "../components/layout/Container";
import SectionTitle from "../components/layout/SectionTitle";
import MenuCard from "../components/ui/MenuCard";
import { breakfastItems } from "../data/siteData";

const Breakfast = () => (
  <main>
    <SEO title="Breakfast Menu" description="Waterfront Cafe breakfast menu with cooked breakfasts, pancakes, eggs, pastries and coffee." />
    <PageBanner title="Breakfast Menu" eyebrow="08:30 AM to 11:30 AM" text="Dawn's first light, Benson's first bite." image="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80" />
    <section className="section menu-section">
      <Container>
        <SectionTitle title="Breakfast by the river" text="Full plates, lighter bites, pastries and morning coffee." />
        <div className="menu-card-grid">{breakfastItems.map((item) => <MenuCard key={item.title} item={item} />)}</div>
      </Container>
    </section>
  </main>
);

export default Breakfast;
