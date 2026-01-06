import React, { useState } from 'react';
import { Send, Calendar, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    package: '',
    requests: '',
    agreed: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreed) {
      setSubmitted(true);
      // In a real app, this would send to an API
    } else {
      alert("Please agree to the Terms and Conditions to proceed.");
    }
  };

  const packages = ['Ruby', 'Bronze', 'Silver', 'Smart', 'Diamond', 'Premium'];

  if (submitted) {
    return (
      <section id="book" className="py-24 bg-black">
        <div className="section-container max-w-2xl text-center">
          <div className="glass-card p-12 flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mb-6" />
            <h2 className="text-3xl font-bold mb-4">Inquiry <span className="gold-text">Success!</span></h2>
            <p className="text-white/60 mb-8">
              Thank you for reaching out to Excel Imagery. We've received your request for {formData.package} package on {formData.date} and will contact you within 24 hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#FFDF00] transition-all"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-24 bg-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to <span className="gold-text">Join the Elite?</span></h2>
            <p className="text-white/50 mb-8 text-lg">
              Book your session today and let us transform your moments into cinematic history. 
              Our team is ready to capture the soul of your event.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-sm text-white/40">31 Itiam Street, Uyo, Akwa Ibom</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Consultation</h4>
                  <p className="text-sm text-white/40">Available 9AM - 6PM Daily</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#D4AF37] outline-none transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Event Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#D4AF37] outline-none transition-colors"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Choose Package</label>
                  <select 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#D4AF37] outline-none transition-colors appearance-none"
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                  >
                    <option value="" disabled className="bg-black">Select a package</option>
                    {packages.map(p => (
                      <option key={p} value={p} className="bg-black">{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Location & Special Requests</label>
                <textarea 
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#D4AF37] outline-none transition-colors"
                  placeholder="Tell us about your event..."
                  value={formData.requests}
                  onChange={(e) => setFormData({...formData, requests: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="agree"
                  className="mt-1 accent-[#D4AF37]"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                />
                <label htmlFor="agree" className="text-sm text-white/40 cursor-pointer">
                  I agree to the <a href="#terms" className="text-[#D4AF37] hover:underline">Terms & Conditions</a> mentioned above.
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-[#D4AF37] text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#FFDF00] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Your Experience
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .grid { display: grid; }
        @media (min-width: 1024px) { .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        .gap-16 { gap: 4rem; }
        .gap-6 { gap: 1.5rem; }
      `}} />
    </section>
  );
};

export default BookingForm;
