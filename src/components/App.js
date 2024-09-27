import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';

import Header from './Header';
import Footer from './Footer';

import Tag from './Tag';
import Thumb from './Thumb';
import Dropdown from './Dropdown';
import Carrousel from './Carrousel';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
