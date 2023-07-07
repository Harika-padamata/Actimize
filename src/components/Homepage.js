import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";
import Ourservices from "./Ourservices";
import SuccesStory from "./SuccesStory";
import TestVideo from "./TestVideo";
import Vedio from "./Video";

function Homepage() {
  return (
    <>
    <Navbar/>
    <Vedio/>
    {/* <TestVideo/> */}
    <SuccesStory/>
    <Ourservices/>
    <ContactForm/>
    <Footer/>
    {/* <ImageSlider/> */}
    </>
  );
}

export default Homepage;
