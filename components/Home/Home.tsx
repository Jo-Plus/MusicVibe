'use client'
import React, { useEffect } from 'react'
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Review from './Review/Review';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from '../Helper/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {

  useEffect(() => {
    const initAos = async ()=>{
    AOS.init({
      duration: 1000,
      once: true,
      easing:"ease",
      anchorPlacement:"top-bottom"
    });
  };
  initAos();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Features/>
      <About textOrder="lg:order-1" imageOrder="lg:order-2" linkText="Learn More" title="Pure sound, no added noise" />
      <About textOrder="lg:order-2" imageOrder="lg:order-1" linkText="Shop Now" title="Capture pure sound with the 70mm HD Driver" />
      <Review/>
      <Contact/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default Home