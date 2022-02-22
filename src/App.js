import './App.css';
import HomePage from './pages/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFound from './pages/NotFound/NotFound';
import MenuHeader from './components/MenuHeader/MenuHeader';
import Footer from './components/Footer/Footer';

function App() {
  const url = useLocation('/');
  return (
    <>
      <MenuHeader bgActive={url.pathname !== '/'} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="game" element={<GamePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
