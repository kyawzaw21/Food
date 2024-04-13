import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import Services from './components/Navbar/Services/Services'
import Banner from './components/Navbar/Banner/Banner'
import AppStore from './components/Navbar/AppStore/AppStore'
import Testimonial from './components/Navbar/Testimonial/Testimonial'
import Footer from './components/Navbar/Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
         <>
     <Navbar/>
     <Hero/>
     <Services/>
     <Banner/>
     <AppStore/>
     <Testimonial/>
     <Footer/>
    </>
    </div>
   
  )
}

export default App

