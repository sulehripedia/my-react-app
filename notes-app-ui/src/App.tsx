// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Trading from './pages/Trading';
import Maritime from './pages/Maritime';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trading" element={<Trading />} />
      <Route path="/maritime" element={<Maritime />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='projects' element={<Projects />}/>
    </Routes>
     <Footer />
  </BrowserRouter>
);
export default App;
