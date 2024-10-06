import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Logement from '../pages/Logement/Logement';
import About from '../pages/About/About';
import Error from '../pages/Error/Error';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  const urlRegex = '';
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="logement/:id" element={<Logement />} />
          <Route path="a-propos" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
