import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Know from './components/Know/Know';
import './index.css'
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";
import Installation from "./components/Installations/Installation";
import './App.css'
import Pmain from "./components/Power_Packs/Pmain";
import Hmlts from "./components/Home_Lights/Hmlts";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTopOnPageChange/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="more" element={<Know />} />
          <Route path="show" element={<Installation/>}/>
          <Route path="power" element={<Pmain/>} />
          <Route path="lights" element={<Hmlts/>} />   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);