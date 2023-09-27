import ScrollServices from './Components/ScrollServices';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Products from './Components/Products';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import './App.css';
import Testimonials from './Components/Testimonials';
import scrollreveal from "scrollreveal";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        #contact,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <div className="App">
        <ScrollServices/>
        <Navbar/>
        <Hero/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Products/>
        <Newsletter/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
