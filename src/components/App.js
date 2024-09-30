import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Logement from '../pages/Logement';
import Apropos from '../pages/Apropos';

import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
