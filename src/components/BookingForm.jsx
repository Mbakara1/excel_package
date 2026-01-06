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
          to: 'pmbakara@gmail.com'
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError('Failed to send your request. Please try again or contact us directly at pmbakara@gmail.com');
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
      <section className="py-40 bg-white text-center min-h-[600px] flex items-center">
        <div className="section-container w-full">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }} 
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
             className="max-w-2xl mx-auto"
           >
              <CheckCircle className="w-20 h-20 text-black mx-auto mb-8" strokeWidth={1.5} />
              <h2 className="text-black mb-6 leading-tight">Request <span className="serif-italic font-normal">Received</span></h2>
              <p className="text-black/60 text-base font-normal leading-relaxed mb-4">Your commission request has been archived in our registry.</p>
              <p className="text-black/40 text-sm font-medium tracking-wider uppercase">Our concierge will contact you within 24 hours.</p>
              <motion.a 
                href="/"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block mt-12 text-[11px] font-black tracking-[0.3em] uppercase text-black/30 hover:text-black transition-colors"
              >
                Return to Archive [←]
              </motion.a>
           </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-32 bg-white text-black border-t border-black/5">
      <div className="section-container">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-20">
               <div className="flex items-center gap-6 mb-8">
                  <div className="h-[1px] flex-1 bg-black/10" />
                  <span className="text-[9px] font-bold tracking-[0.6em] text-black/30 uppercase">Reservation</span>
                  <div className="h-[1px] flex-1 bg-black/10" />
               </div>
               <h2 className="text-black text-center mb-6 leading-[0.85]">
                  Commission <br />
                  <span className="serif-italic font-normal">A Session</span>
               </h2>
            </div>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               {/* Sidebar - Info */}
               <div className="lg:col-span-4 space-y-12">
                  {/* Contact Details */}
                  <div className="bg-black/[0.02] p-10 border border-black/5">
                     <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-black/80">Direct Contact</h3>
                     <div className="space-y-4 text-sm text-black/70">
                        <p className="flex items-start gap-3">
                           <span className="text-black/40 text-xs mt-1">📍</span>
                           <span>31 Itiam Street, Uyo</span>
                        </p>
                        <p className="flex items-start gap-3">
                           <span className="text-black/40 text-xs mt-1">📞</span>
                           <span>+234 812 345 6789</span>
                        </p>
                        <p className="flex items-start gap-3">
                           <span className="text-black/40 text-xs mt-1">✉️</span>
                           <span className="font-medium text-black">pmbakara@gmail</span>
                        </p>
                     </div>
                  </div>

                  {/* Payment Terms */}
                  <div className="border-l-2 border-black/10 pl-8">
                     <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-black/80">Payment Terms</h3>
                     <div className="space-y-4 text-sm text-black/60 leading-relaxed">
                        <p>• 50% non-refundable deposit required to secure your date</p>
                        <p>• Remaining balance due 48 hours before event commencement</p>
                        <p>• All payments processed securely</p>
                     </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-black text-white p-8">
                     <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3 text-white/60">Typical Response</p>
                     <p className="text-3xl font-serif italic">24 hrs</p>
                  </div>
               </div>

               {/* Main Form */}
               <div className="lg:col-span-8">
                  <form onSubmit={handleSubmit} className="space-y-12">
                     {/* Personal Details */}
                     <div className="space-y-8">
                        <div className="pb-4 border-b border-black/10">
                           <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-black/60">01 / Personal Details</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <label className="block text-xs font-bold tracking-wider uppercase text-black/50">Name</label>
                              <input 
                                required 
                                name="name"
                                type="text" 
                                className="w-full bg-white border-b-2 border-black/10 py-3 text-base focus:border-black outline-none transition-colors placeholder:text-black/20" 
                                placeholder="Your full name" 
                              />
                           </div>

                           <div className="space-y-3">
                              <label className="block text-xs font-bold tracking-wider uppercase text-black/50">Email</label>
                              <input 
                                required 
                                name="email"
                                type="email" 
                                className="w-full bg-white border-b-2 border-black/10 py-3 text-base focus:border-black outline-none transition-colors placeholder:text-black/20" 
                                placeholder="email@example.com" 
                              />
                           </div>

                           <div className="space-y-3 md:col-span-2">
                              <label className="block text-xs font-bold tracking-wider uppercase text-black/50">Phone <span className="text-black/30">(Optional)</span></label>
                              <input 
                                name="phone"
                                type="tel" 
                                className="w-full bg-white border-b-2 border-black/10 py-3 text-base focus:border-black outline-none transition-colors placeholder:text-black/20" 
                                placeholder="+234 000 000 0000" 
                              />
                           </div>
                        </div>
                     </div>

                     {/* Event Information */}
                     <div className="space-y-8">
                        <div className="pb-4 border-b border-black/10">
                           <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-black/60">02 / Event Information</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <label className="block text-xs font-bold tracking-wider uppercase text-black/50">Event Date</label>
                              <input 
                                required 
                                name="eventDate"
                                type="date" 
                                className="w-full bg-white border-b-2 border-black/10 py-3 text-base focus:border-black outline-none transition-colors cursor-pointer" 
                              />
                           </div>

                           <div className="space-y-3">
                              <label className="block text-xs font-bold tracking-wider uppercase text-black/50">Package</label>
                              <select 
                                required
                                name="collection"
                                className="w-full bg-white border-b-2 border-black/10 py-3 text-base focus:border-black outline-none transition-colors appearance-none cursor-pointer"
                              >
                                 <option value="">Select package</option>
                                 <option>Ruby (Vol. 1) — ₦150k</option>
                                 <option>Bronze (Vol. 2) — ₦200k</option>
                                 <option>Silver (Vol. 3) — ₦350k</option>
                                 <option>Smart (Vol. 4) — ₦400k</option>
                                 <option>Diamond (Vol. 5) — ₦650k</option>
                                 <option>Premium (Vol. 6) — Custom</option>
                              </select>
                           </div>
                        </div>
                     </div>

                     {/* Additional Details */}
                     <div className="space-y-8">
                        <div className="pb-4 border-b border-black/10">
                           <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-black/60">03 / Additional Details</h4>
                        </div>

                        <div className="space-y-3">
                           <label className="block text-xs font-bold tracking-wider uppercase text-black/50">Special Requests <span className="text-black/30">(Optional)</span></label>
                           <textarea 
                             name="message"
                             rows="6" 
                             className="w-full bg-white border-2 border-black/10 p-6 text-base focus:border-black outline-none transition-colors resize-none placeholder:text-black/20 leading-relaxed" 
                             placeholder="Share any specific requirements, creative vision, or special requests for your event..."
                           />
                        </div>
                     </div>

                     {/* Error Message */}
                     <AnimatePresence>
                       {error && (
                         <motion.div
                           initial={{ opacity: 0, y: -10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0 }}
                           className="p-5 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm"
                         >
                           <p className="font-bold mb-1">Submission Error</p>
                           <p>{error}</p>
                         </motion.div>
                       )}
                     </AnimatePresence>

                     {/* Submit */}
                     <div className="pt-8 space-y-4">
                        <button 
                          type="submit" 
                          disabled={isLoading}
                          className="w-full bg-black text-white py-6 text-xs font-black uppercase tracking-[0.4em] hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 group"
                        >
                           {isLoading ? (
                             <>
                               <Loader size={18} className="animate-spin" />
                               Processing
                             </>
                           ) : (
                             <>
                               Submit Enquiry
                               <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                             </>
                           )}
                        </button>
                        <p className="text-center text-xs text-black/40 tracking-wide">
                           By submitting, you acknowledge our payment and booking terms
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default BookingForm;
