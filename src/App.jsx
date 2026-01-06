import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GalleryPreview from './components/GalleryPreview';
import Pricing from './components/Pricing';
import Terms from './components/Terms';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black">
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Terms />
        <GalleryPreview />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default App;
