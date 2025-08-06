
import { Header } from './sections/header.jsx';
import { Footer } from './sections/footer.jsx';
import { About } from './sections/About.jsx';
import { Clients } from './sections/clients.jsx';
import { Hero } from './sections/hero.jsx';
import { Offer } from './sections/offer.jsx';
import { Portfolio } from './sections/Portfolio.jsx';
import { Reviews } from './sections/Reviews.jsx';
import { Cta } from './sections/Cta.jsx';


export default function App() {
  return (
    <>
    <Header />
      <Hero />
      <About />
      <Clients />
      <Offer />
      <Portfolio />
      <Reviews />
      <Cta/>
      <Footer />
    </>
  );
}