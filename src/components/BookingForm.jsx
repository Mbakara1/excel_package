import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-40 bg-black text-center h-[600px] flex items-center">
        <div className="section-container w-full">
           <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <CheckCircle className="w-20 h-20 text-white mx-auto mb-8" />
              <h2 className="text-white mb-4">Message <span className="serif-italic font-normal">Stored</span></h2>
              <p className="text-white/40">Our concierge will contact you within 24 hours.</p>
           </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-40 bg-white text-black">
      <div className="section-container">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
                <span className="text-[10px] font-bold tracking-[0.5em] text-black/40 uppercase mb-4 block">Reservation</span>
                <h2 className="text-black mb-8 leading-[0.8]">Commission <br /><span className="serif-italic font-normal">A Session</span></h2>
                <div className="space-y-8 mt-12 text-black/60 font-medium text-xs tracking-widest uppercase">
                   <p>31 Itiam Street, Uyo</p>
                   <p>+234 812 345 6789</p>
                   <p>hello@excelimagery.com</p>
                </div>
            </div>

            <div className="lg:col-span-8">
               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-black/30">Your Name</label>
                     <input required type="text" className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors" placeholder="Full Name" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-black/30">Email Address</label>
                     <input required type="email" className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors" placeholder="email@address.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-black/30">Event Date</label>
                     <input required type="date" className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2 relative">
                     <label className="text-[10px] font-black uppercase tracking-widest text-black/30">Collection</label>
                     <select className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors appearance-none cursor-pointer">
                        <option>Ruby (Vol. 1)</option>
                        <option>Bronze (Vol. 2)</option>
                        <option>Silver (Vol. 3)</option>
                        <option>Smart (Vol. 4)</option>
                        <option>Diamond (Vol. 5)</option>
                        <option>Premium / Custom (Vol. 6)</option>
                     </select>
                     <p className="text-[9px] font-medium tracking-wider text-black/40 mt-2 italic uppercase">
                        Select to specify your preferred archive volume [↓]
                     </p>
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-black/30">Creative Vision / Notes</label>
                     <textarea rows="4" className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors resize-none" placeholder="Details about your event..." />
                  </div>
                  
                  <div className="md:col-span-2 mt-8">
                     <button type="submit" className="w-full bg-black text-white py-6 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-black/80 transition-all flex items-center justify-center gap-4">
                        Send Inquiry
                        <Send size={16} />
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
    </section>
  );
};

export default BookingForm;
