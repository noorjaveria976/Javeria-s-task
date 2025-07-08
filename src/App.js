import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home_page from "./pages/home/Home_page";
import About_page from "./pages/about/About_page";
import Contact_page from "./pages/contact/Contact_page";
import Services from "./pages/services/Services";
import Testimonial from "./pages/testimonial/Testimonial";
import Carousel from "./components/slider/Carousel";



function App() {
 

  return (
    <div className="App">
      
      <Navbar/>
{/* <Carousel/> */}
      <Routes>
          {/* <Route path="/" element={<Layout />}></Route> */}

          <Route path='/' element={<Home_page/>}/>
          <Route path='/about' element={<About_page/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/testi' element={<Testimonial/>}/>
          <Route path='/contact' element={<Contact_page/>}/>
          

      </Routes>
      
      

      <Footer/>
      
    </div>
  );
}

export default App;
