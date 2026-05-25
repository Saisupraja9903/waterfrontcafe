
import { useMemo, useState } from "react";
import { FiX, FiHeart, FiArrowUpRight } from "react-icons/fi";
import SEO from "../components/SEO";
import styles from "./Gallery.module.css";

import gallery1 from "../assets/gallery1.avif";
import gallery2 from "../assets/gallery2.avif";
import gallery3 from "../assets/gallery3.avif";
import gallery4 from "../assets/gallery4.avif";
import gallery5 from "../assets/gallery5.avif";
import gallery6 from "../assets/gallery6.avif";
import gallery7 from "../assets/gallery7.avif";
import gallery8 from "../assets/gallery8.avif";
import gallery9 from "../assets/gallery9.avif";
import gallery10 from "../assets/gallery10.avif";
import gallery11 from "../assets/gallery11.avif";
import gallery12 from "../assets/gallery12.avif";
import gallery13 from "../assets/gallery13.avif";
import gallery14 from "../assets/gallery14.avif";
import gallery15 from "../assets/gallery15.avif";
import gallery16 from "../assets/gallery16.avif";
import gallery17 from "../assets/gallery17.avif";
import gallery18 from "../assets/gallery18.avif";
import gallery19 from "../assets/gallery19.avif";

const galleryItems = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
];


const Gallery = () => {
  const [active, setActive] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Triplicate and shuffle the image set to create a dense, randomized feel
  const shuffledItems = useMemo(() => {
    return [...galleryItems, ...galleryItems, ...galleryItems]
      .sort(() => Math.random() - 0.5);
  }, []);

  const visibleImages = useMemo(() =>
    showAll ? shuffledItems : shuffledItems.slice(0, 8),
    [showAll, shuffledItems]
  );

  return (
    <main className={styles.galleryRoot}>
      <SEO title="Gallery" description="View the Waterfront Cafe gallery including riverside views, food, coffee and cafe spaces." />
      <section className={styles.gallerySection}>
        <h1 className={styles.galleryTitle}>The Waterfront Gallery</h1>
        <div className={styles.galleryGrid}>
          {visibleImages.map((src, index) => (
            <div key={`${src}-${index}`} className={styles.galleryTile}>
              <button 
                className={styles.imageButton} 
                onClick={() => setActive(src)}
              >
                <img src={src} alt={`Waterfront Gallery item ${index}`} loading="lazy" />
                <div className={styles.overlay} aria-hidden="true" />
                <div className={`${styles.icon} ${styles.heartIcon}`}>
                  <FiHeart />
                </div>
                <div className={`${styles.icon} ${styles.shareIcon}`}>
                  <FiArrowUpRight />
                </div>
              </button>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className={styles.galleryLoad}>
            <button className={styles.loadMoreButton} onClick={() => setShowAll(true)}>
              Load More
            </button>
          </div>
        )}
      </section>

      {active && (
        <div className={styles.lightbox} onClick={() => setActive(null)}>
          <button aria-label="Close gallery" className={styles.lightboxClose}>
            <FiX />
          </button>
          <img src={active} alt="Selected Waterfront Cafe gallery" />
        </div>
      )}
    </main>
  );
};

export default Gallery;
