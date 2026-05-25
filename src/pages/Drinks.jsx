import SEO from "../components/SEO";
import PageBanner from "../components/layout/PageBanner";
import Container from "../components/layout/Container";
import SectionTitle from "../components/layout/SectionTitle";
import MenuCard from "../components/ui/MenuCard";
import { drinkItems } from "../data/siteData";

const Drinks = () => (
  <main>
    <SEO title="Drinks Menu" description="Waterfront Cafe drinks menu with cocktails, coffee, tea, wine, beer and soft drinks." />
    <PageBanner title="Drinks Menu" eyebrow="Cafe, bar and bistro" text="Wine, beer, cocktails, soft drinks and barista coffee for waterside afternoons." image="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1600&q=80" />
    <section className="section menu-section">
      <Container>
        <SectionTitle title="Something chilled, sparkling or freshly brewed" text="Ask the team for current draught beers, wine availability and seasonal cocktails." />
        <div className="menu-tabs-static"><span>Cocktails</span><span>Coffee</span><span>Tea</span><span>Wine</span><span>Beer</span><span>Soft Drinks</span></div>
        <div className="menu-card-grid">{drinkItems.map((item) => <MenuCard key={item.title} item={item} />)}</div>
      </Container>
    </section>
  </main>
);

export default Drinks;
