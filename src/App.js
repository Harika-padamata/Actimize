import ContactForm from "./components/ContactForm";
import ImageSlider from "./components/ImageSlider";
import Technology from "./components/Technology";
import Microsoft from "./components/Microsoft";
import Client from "./components/Client";
import Home from "./components/Home";
import Acceldata from "./components/Acceldata";
// import Navbar from "./components/Navbar";
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
      <Route path="/"   element={ <Home/> }/>
      <Route path="Technology"  exact element={ <Technology/> } />
      <Route path="technology/Microsoft"  exact element={ <Microsoft/> } />
      <Route path="Client"  exact element={ <Client/> } />
    
      <Route path="client/acceldata"  exact element={ <Acceldata/> } />
      </Routes>
    
    
  
    </>
  );
}

export default App;


