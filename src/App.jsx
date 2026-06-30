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
import CollapsibleSection from './components/CollapsibleSection';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        
        <CollapsibleSection title="Our Portfolio (Photos)" number="01" defaultOpen={false}>
          <Portfolio />
        </CollapsibleSection>

        <CollapsibleSection title="Cinematic Showreels (Videos)" number="02" defaultOpen={false}>
          <Showreel />
        </CollapsibleSection>

        <CollapsibleSection title="What Our Clients Say" number="03" defaultOpen={false}>
          <Testimonials />
        </CollapsibleSection>

        <CollapsibleSection title="Pricing & Packages" number="04" defaultOpen={false}>
          <Pricing />
        </CollapsibleSection>

        <CollapsibleSection title="Why Choose Us" number="05" defaultOpen={false}>
          <WhyUs />
        </CollapsibleSection>

        <CollapsibleSection title="Booking & Inquiry" number="06" defaultOpen={false}>
          <BookingForm />
        </CollapsibleSection>

        <CollapsibleSection title="Terms & Conditions" number="07" defaultOpen={false}>
          <Terms />
        </CollapsibleSection>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default App;
