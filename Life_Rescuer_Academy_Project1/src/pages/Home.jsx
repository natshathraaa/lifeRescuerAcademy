import Hero from "../components/Hero";
import About from "../components/About";
import CoreValues from "../components/CoreValues";
import WhyChooseUs from "../components/WhyChooseUs";
import Courses from "../components/Courses";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Statistics from "../components/Statistics";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CoreValues />
      <WhyChooseUs />
      <Courses />
      <Gallery />
      <Testimonials />
      <Statistics />
      <Contact />
    </>
  );
}
