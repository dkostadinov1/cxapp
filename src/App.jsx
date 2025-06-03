import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Services.jsx";
import Pricing from "./sections/Certificates.jsx";
import Faq from "./sections/Faq.jsx";
import Footer from "./sections/Footer.jsx";
import Services from "./sections/Services.jsx";
import Certificates from "./sections/Certificates.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Certificates />
      <Footer />
    </main>
  );
};

export default App;
