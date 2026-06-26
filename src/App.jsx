import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Showreel from './components/Showreel';
import Pricing from './components/Pricing';
import Terms from './components/Terms';
import WhyUs from './components/WhyUs';
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
        <StatsBar />
        <Portfolio />
        <Testimonials />
        <Showreel />
        <Pricing />
        <Terms />
        <WhyUs />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default App;
