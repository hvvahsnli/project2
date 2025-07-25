import Header from '../app/components/Header';
import AboutUs from './components/About';
import Categories from './components/categories/Categories';
import Contact from './components/Contact';
import FeaturedBooks from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <FeaturedBooks />
      <Testimonials />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}
