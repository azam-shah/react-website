import './Home.css';
import HeroSection from "./HeroSection";
import Sale from './Sale';
import Product from './Product';
import Sellbox from './Sellbox';
import Other from './Other';
import Protect from './Protect';
import Feature from './Feature';
import Last from './Last';
import Footer from './Footer';

function Home() {
  

  return (
    <>
      <HeroSection />
      <Sale/>
      <Product/>
      <Sellbox/>
      <Other/>
      <Protect/>
      <Feature/>
      <Last/>
      <Footer/>
    </>
  );
}

export default Home;
