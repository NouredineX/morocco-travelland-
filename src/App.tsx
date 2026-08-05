import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import './i18n';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="morocco-tours" element={<Tours />} />
            <Route path="morocco-tours/:slug" element={<TourDetail />} />
            <Route path="morocco-destinations" element={<Destinations />} />
            <Route path="morocco-destinations/:slug" element={<DestinationDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<Blog />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
