import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Logement from '../pages/Logement/Logement';
import About from '../pages/About/About';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/apropos" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
