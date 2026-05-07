import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Themes from "../components/Themes";
import Prizes from "../components/Prizes";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Themes />
      <Prizes />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;