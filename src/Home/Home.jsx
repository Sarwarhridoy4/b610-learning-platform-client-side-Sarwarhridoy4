import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import AppSection from "./App/AppSection";
import Cover from "./Cover/Cover";
import Pricing from "./Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Cover />
      <Pricing/>
      <AppSection/>
      <ContactForm />
    </div>
  );
};

export default Home;
