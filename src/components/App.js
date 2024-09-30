import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Logement from '../pages/Logement';

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
