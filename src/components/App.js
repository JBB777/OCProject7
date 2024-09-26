import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import Tag from './Tag';
import Thumb from './Thumb';
import Dropdown from './Dropdown';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Tag tagName="test tag name" />
        <Thumb title="test thumb title" />
        <Dropdown
          title="test dropdown title"
          content="Je suis le contenu du dropdown"
        />
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
