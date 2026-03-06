
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import AppSection from "./App/AppSection.jsx";
import Cover from "./Cover/Cover.jsx";
import HadithSection from "./Hadith/HadithSection.jsx";
import Pricing from "./Pricing/Pricing.jsx";

const Home = () => {
  return (
    <div className='space-y-8'>
      <Cover />
      <HadithSection />
      <Pricing />
      <AppSection />
      <ContactForm />
    </div>
  );
};

export default Home;
