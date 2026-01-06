import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader } from 'lucide-react';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Web3Forms API key - replace with your actual key from web3forms.com
  const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
  const USE_WEB3FORMS = WEB3FORMS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Not provided';
    const eventDate = formData.get('eventDate');
    const collection = formData.get('collection');
    const message = formData.get('message') || 'No additional notes';

    if (USE_WEB3FORMS) {
      // Strategy 1: Use Web3Forms API for professional email delivery
      const data = {
        access_key: WEB3FORMS_KEY,
        subject: "New Excel Imagery Booking Request",
        from_name: name,
        email: email,
        phone: phone,
        event_date: eventDate,
        collection: collection,
        message: message,
        to: "pmbakara@gmail.com"
      };

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          setError('Failed to send your request. Please try again or contact us directly.');
        }
      } catch (err) {
        setError('Network error. Please check your connection and try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      // Strategy 2: Fallback to mailto: for immediate functionality
      console.log('📧 Using mailto: fallback (Web3Forms not configured)');
      
      const subject = encodeURIComponent('Excel Imagery Booking Request');
      const body = encodeURIComponent(`
BOOKING REQUEST
================

Client Information:
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone}

Event Details:
--------------
Date: ${eventDate}
Collection: ${collection}

Additional Notes:
-----------------
${message}

---
Sent via Excel Imagery Reservation Form
      `);

      const mailtoLink = `mailto:pmbakara@gmail.com?subject=${subject}&body=${body}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Show success after a brief delay
      setTimeout(() => {
        setSubmitted(true);
        setIsLoading(false);
      }, 1000);
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
    <section id="book" className="py-40 bg-white text-black">
      <div className="section-container">
         <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-24">
               <span className="text-[10px] font-bold tracking-[0.5em] text-black/30 uppercase mb-8 block">Reservation</span>
               <h2 className="text-black mb-8 leading-[0.8]">Commission <br /><span className="serif-italic font-normal">A Session</span></h2>
               <div className="h-[1px] w-24 bg-black/10 mx-auto mb-8" />
               <p className="text-sm font-normal text-black/60 tracking-wide max-w-xl mx-auto leading-relaxed">
                  50% non-refundable commitment required. Balance due 48 hours before event.
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-24">
               {/* Contact Information */}
               <div>
                  <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-black mb-12 pb-6 border-b border-black/10">Contact Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
                     <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/60">Your Name*</label>
                        <input 
                          required 
                          name="name"
                          type="text" 
                          className="bg-transparent border-b border-black/10 py-5 focus:border-black outline-none transition-all text-base font-normal" 
                          placeholder="Full name" 
                        />
                     </div>
                     <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/60">Email Address*</label>
                        <input 
                          required 
                          name="email"
                          type="email" 
                          className="bg-transparent border-b border-black/10 py-5 focus:border-black outline-none transition-all text-base font-normal" 
                          placeholder="email@address.com" 
                        />
                     </div>
                     <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/60">Phone Number</label>
                        <input 
                          name="phone"
                          type="tel" 
                          className="bg-transparent border-b border-black/10 py-5 focus:border-black outline-none transition-all text-base font-normal" 
                          placeholder="+234 000 000 0000" 
                        />
                     </div>
                  </div>
               </div>

               {/* Event Details */}
               <div>
                  <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-black mb-12 pb-6 border-b border-black/10">Event Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
                     <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/60">Event Date*</label>
                        <input 
                          required 
                          name="eventDate"
                          type="date" 
                          className="bg-transparent border-b border-black/10 py-5 focus:border-black outline-none transition-all text-base font-normal cursor-pointer" 
                        />
                     </div>
                     <div className="flex flex-col gap-4 relative">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/60">Collection Volume*</label>
                        <select 
                          required
                          name="collection"
                          className="bg-transparent border-b border-black/10 py-5 focus:border-black outline-none transition-all appearance-none cursor-pointer text-base font-normal"
                        >
                           <option value="">Select volume</option>
                           <option>Ruby (Vol. 1)</option>
                           <option>Bronze (Vol. 2)</option>
                           <option>Silver (Vol. 3)</option>
                           <option>Smart (Vol. 4)</option>
                           <option>Diamond (Vol. 5)</option>
                           <option>Premium / Custom (Vol. 6)</option>
                        </select>
                     </div>
                  </div>
               </div>

               {/* Creative Vision */}
               <div>
                  <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-black mb-12 pb-6 border-b border-black/10">Additional Notes</h3>
                  <div className="flex flex-col gap-4">
                     <label className="text-[10px] font-black uppercase tracking-widest text-black/60">Special Requests</label>
                     <textarea 
                       name="message"
                       rows="6" 
                       className="bg-transparent border border-black/10 p-8 focus:border-black outline-none transition-all resize-none text-base font-normal leading-relaxed" 
                       placeholder="Details about your event, specific requirements, or creative direction..."
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
                     className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm text-center"
                   >
                     {error}
                   </motion.div>
                 )}
               </AnimatePresence>

               {/* Submit Button */}
               <div className="pt-8">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-black text-white py-6 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-black/90 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                     {isLoading ? (
                       <>
                         <Loader size={16} className="animate-spin" />
                         Processing Request
                       </>
                     ) : (
                       <>
                         Send Inquiry
                         <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                       </>
                     )}
                  </button>
                  <p className="text-center mt-6 text-[10px] font-medium tracking-wider text-black/30 uppercase">
                     We typically respond within 24 hours
                  </p>
               </div>
            </form>

            {/* Contact Info */}
            <div className="mt-20 pt-20 border-t border-black/10 text-center space-y-4">
               <p className="text-xs font-bold tracking-widest uppercase text-black/40">Direct Contact</p>
               <div className="space-y-2 text-black/60 font-medium text-sm">
                  <p>31 Itiam Street, Uyo</p>
                  <p>+234 812 345 6789</p>
                  <p className="text-black font-semibold">hello@excelimagery.com</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default BookingForm;
