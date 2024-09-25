import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
