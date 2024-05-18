import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";

import WorkSection from "./components/WorkSection";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Team from "./components/team/Team";
import Testimonial from "./components/testimonial/Testimonial";
import styles from "./page.module.css";



export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <WorkSection />
      <ServiceSection />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </main >
  );
}
