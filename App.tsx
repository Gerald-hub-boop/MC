import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

// Komponen tambahan untuk memastikan scroll balik ke atas saat pindah rute
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      {/* ScrollToTop diletakkan di dalam Router agar bisa membaca lokasi rute */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Konten Utama */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />

            {/* Opsi: Tambahkan rute fallback jika user mengetik alamat asal-asalan */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;