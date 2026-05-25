import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Header from "./header/Header";
// import "./Hero.css";

const butterfly =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 104'%3E%3Cdefs%3E%3Cfilter id='s' x='-30%25' y='-30%25' width='160%25' height='160%25'%3E%3CfeDropShadow dx='0' dy='8' stdDeviation='5' flood-color='%23001f2c' flood-opacity='.45'/%3E%3C/filter%3E%3CradialGradient id='b' cx='45%25' cy='42%25' r='62%25'%3E%3Cstop offset='0' stop-color='%23e8f4ff'/%3E%3Cstop offset='.42' stop-color='%238db7ff'/%3E%3Cstop offset='1' stop-color='%233b72c9'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg filter='url(%23s)'%3E%3Cpath d='M67 52C45 8 19 0 8 17-6 39 23 66 64 57Z' fill='url(%23b)' stroke='%23d7ecff' stroke-width='3'/%3E%3Cpath d='M73 52c22-44 48-52 59-35 14 22-15 49-56 40Z' fill='url(%23b)' stroke='%23d7ecff' stroke-width='3'/%3E%3Cpath d='M66 58C35 63 24 84 35 97c15 17 38-5 36-34Z' fill='%237da7f7' stroke='%23d7ecff' stroke-width='3'/%3E%3Cpath d='M74 58c31 5 42 26 31 39-15 17-38-5-36-34Z' fill='%237da7f7' stroke='%23d7ecff' stroke-width='3'/%3E%3Cpath d='M70 38c5 14 5 31 0 51' stroke='%231b376d' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M66 39c-9-9-18-13-27-14M74 39c9-9 18-13 27-14' stroke='%231b376d' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3C/g%3E%3C/svg%3E";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Hero image zooms in after the header content disappears
  const bgScale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 1.5]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  
  // Header and text move down together and disappear in the middle of the image
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "50vh"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45, 0.5], [1, 1, 0]);
  return (
    <section className="hero" ref={heroRef}>
      {/* Removed animated Header to prevent double header/layer effect */}
      <motion.img
        src="https://static.wixstatic.com/media/470683_7ca1559c234c439893aad09334695d85~mv2.jpg"
        alt="Waterfront Cafe beside the River Thames"
        className="hero-bg"
        style={{
          scale: bgScale,
          y: bgY,
        }}
      />
      {/* <div className="hero-overlay" style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }} /> */}
      <motion.div className="hero-arches" aria-hidden="true" style={{ y: archY }}>
        <div className="arch arch-left" />
        <div className="arch arch-center" />
        <div className="arch arch-right" />
      </motion.div>
      <img className="hero-butterfly" src={butterfly} alt="" aria-hidden="true" />
      <motion.div
        className="hero-content"
        style={{ y: contentY, opacity: contentOpacity }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.22,
              delayChildren: 0.18,
            },
          },
        }}
      >
       <motion.h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}>
          {[
            "ARRIVE AS A GUEST",
            "LEAVE AS A FRIEND",
            "COME BACK AS FAMILY"
          ].map((line) => (
            <motion.span
              key={line}
              variants={{
                hidden: { opacity: 0, y: 34 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    </section>
  );
}

export default Hero;
