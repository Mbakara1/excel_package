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
        setError('Failed to send your request. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Network error. Please try again.');
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
              <CheckCircle className="w-20 h-20 text-white mx-auto mb-8" strokeWidth={1.5} />
              <h2 className="text-white mb-6 leading-tight">Request <span className="serif-italic font-normal">Received</span></h2>
              <p className="text-white/60 text-base font-normal leading-relaxed mb-4">Your commission request has been archived in our registry.</p>
              <motion.a 
                href="/"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block mt-12 text-[11px] font-black tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors underline underline-offset-8"
              >
                Back to Archive
              </motion.a>
           </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-40 bg-black text-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase block mb-8">Inquiry Registry</span>
          <h2 className="text-white mb-6 leading-[0.9] text-6xl md:text-8xl">
            Book <br />
            <span className="serif-italic font-normal">A Session</span>
          </h2>
        </div>

        {/* Minimal Form */}
        <div className="max-w-3xl mx-auto">
          {error && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12 p-6 border border-white/10 text-center"
            >
              <p className="text-white/60 text-sm italic">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-16">
            {/* Field Groups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="space-y-4">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Full Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-all placeholder:text-white/10"
                  placeholder="Insert Name"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Email Address</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-all placeholder:text-white/10"
                  placeholder="Insert Email"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-all placeholder:text-white/10"
                  placeholder="Insert Phone"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Event Date</label>
                <input
                  required
                  name="eventDate"
                  type="date"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-all cursor-pointer invert opacity-60"
                />
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Package Collection</label>
                <select
                  required
                  name="collection"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-all cursor-pointer appearance-none"
                >
                  <option value="" className="bg-black">Select Experience</option>
                  <option value="Ruby — ₦350k" className="bg-black">Ruby — ₦350k</option>
                  <option value="Bronze — ₦450k" className="bg-black">Bronze — ₦450k</option>
                  <option value="Silver — ₦600k" className="bg-black">Silver — ₦600k</option>
                  <option value="Smart — ₦700k" className="bg-black">Smart — ₦700k</option>
                  <option value="Diamond — ₦1.1M" className="bg-black">Diamond — ₦1.1M</option>
                </select>
              </div>

              <div className="space-y-4 md:col-span-2 pt-6">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Your Vision</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-all resize-none placeholder:text-white/10"
                  placeholder="What story are we telling?"
                />
              </div>
            </div>

            {/* Simple Submit Action */}
            <div className="pt-12 flex flex-col items-center">
              <button
                type="submit"
                disabled={isLoading}
                className="group relative inline-flex items-center gap-6 px-12 py-6 border border-white hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-30 disabled:pointer-events-none"
              >
                <span className="text-[11px] font-black tracking-[0.5em] uppercase">
                  {isLoading ? 'Submitting Registry...' : 'Register Inquiry'}
                </span>
                {!isLoading && <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              </button>
              
              <p className="mt-8 text-[9px] font-medium tracking-[0.2em] uppercase text-white/20">
                Secure Submission Protocol Active
              </p>
            </div>
          </form>

          {/* Direct Support */}
          <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase">DIRECT_LINE: +234 703 766 7266</div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase">ARCHIVE: excelimagery@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
