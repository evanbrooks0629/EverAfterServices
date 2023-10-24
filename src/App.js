import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import FAQs from './components/FAQs';
import Contact from './components/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
