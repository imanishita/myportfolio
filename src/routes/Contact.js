import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';


function Contact() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "CONTACT ME" text = "Let's Connect and grow together!"/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default Contact;
