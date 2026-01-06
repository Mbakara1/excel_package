import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader } from 'lucide-react';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.target);

    try {
      // Using Web3Forms for professional, reliable email delivery
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '3fe770ba-311a-4642-ad62-14be49c9c398',
          subject: 'New Excel Imagery Booking Request',
          from_name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone') || 'Not provided',
          event_date: formData.get('eventDate'),
          collection: formData.get('collection'),
          message: formData.get('message') || 'No additional notes',
          to: 'excelimagery@gmail.com'
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError('Failed to send your request. Please try again or contact us directly at excelimagery@gmail.com');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-40 bg-black text-center min-h-[600px] flex items-center">
        <div className="section-container w-full">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }} 
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
             className="max-w-2xl mx-auto"
           >
              <CheckCircle className="w-20 h-20 text-[#D4AF37] mx-auto mb-8" strokeWidth={1.5} />
              <h2 className="text-white mb-6 leading-tight">Request <span className="serif-italic font-normal text-[#D4AF37]">Received</span></h2>
              <p className="text-white/60 text-base font-normal leading-relaxed mb-4">Your commission request has been archived in our registry.</p>
              <p className="text-white/40 text-sm font-medium tracking-wider uppercase">Our concierge will contact you within 24 hours.</p>
              <motion.a 
                href="/"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block mt-12 text-[11px] font-black tracking-[0.3em] uppercase text-white/30 hover:text-[#D4AF37] transition-colors"
              >
                Return to Home [←]
              </motion.a>
           </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-40 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-16 bg-white/20"></div>
            <span className="text-[9px] font-bold tracking-[0.6em] text-white/30 uppercase">Reserve Your Date</span>
            <div className="h-px w-16 bg-white/20"></div>
          </div>
          <h2 className="text-white mb-6 leading-[0.9]">
            Book <br />
            <span className="serif-italic font-normal text-[#D4AF37]">Your Session</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto font-light">
            Begin your journey to timeless imagery. Share your vision and we'll craft an unforgettable experience.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
              >
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/50 pb-3 border-b border-white/10">
                  Your Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-xs font-medium tracking-wider uppercase text-white/60">
                      Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-4 text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-medium tracking-wider uppercase text-white/60">
                      Email Address *
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-4 text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-medium tracking-wider uppercase text-white/60">
                    Phone Number <span className="text-white/30">(Optional)</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-4 text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="+234 000 000 0000"
                  />
                </div>
              </div>

              {/* Event Information */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/50 pb-3 border-b border-white/10">
                  Event Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-xs font-medium tracking-wider uppercase text-white/60">
                      Event Date *
                    </label>
                    <input
                      required
                      name="eventDate"
                      type="date"
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-4 text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all cursor-pointer"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-medium tracking-wider uppercase text-white/60">
                      Package *
                    </label>
                    <select
                      required
                      name="collection"
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-4 text-white focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all cursor-pointer"
                    >
                      <option value="" className="bg-gray-900">Select package</option>
                      <option value="Ruby — ₦350k" className="bg-gray-900">Ruby — ₦350k</option>
                      <option value="Bronze — ₦450k" className="bg-gray-900">Bronze — ₦450k</option>
                      <option value="Silver — ₦600k" className="bg-gray-900">Silver — ₦600k</option>
                      <option value="Smart — ₦700k" className="bg-gray-900">Smart — ₦700k</option>
                      <option value="Diamond — ₦1.1M" className="bg-gray-900">Diamond — ₦1.1M</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/50 pb-3 border-b border-white/10">
                  Your Vision
                </h3>
                
                <div className="space-y-3">
                  <label className="block text-xs font-medium tracking-wider uppercase text-white/60">
                    Special Requests <span className="text-white/30">(Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-4 text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
                    placeholder="Tell us about your vision, special requirements, or creative ideas for your event..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#D4AF37] hover:bg-[#C4A037] text-black font-bold text-xs tracking-[0.3em] uppercase py-5 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-[#D4AF37]/20"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-white/30 text-[10px] text-center mt-4 font-light tracking-wide">
                  By submitting, you acknowledge our payment and booking terms
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info Below Form */}
          <div className="mt-12 text-center">
            <p className="text-white/40 text-sm mb-4">Prefer to reach out directly?</p>
            <div className="flex items-center justify-center gap-8 text-white/60 text-sm">
              <a href="tel:+2347037667266" className="hover:text-[#D4AF37] transition-colors">
                +234 703 766 7266
              </a>
              <span className="text-white/20">•</span>
              <a href="mailto:excelimagery@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                excelimagery@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
