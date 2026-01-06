import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, Clock, FileText, Scale, Star } from 'lucide-react';

const termsData = [
  {
    title: "Payment & Booking",
    icon: <ShieldCheck className="w-5 h-5" />,
    content: "A 50% non-refundable commitment fee is required to secure your date. Balance payment is due 48 hours before the event commencement."
  },
  {
    title: "Delivery Timelines",
    icon: <Clock className="w-5 h-5" />,
    content: "Retouched images: 14-21 business days. Highlight films: 30-45 business days. Photobooks: 4-6 weeks post-selection."
  },
  {
    title: "Policies",
    icon: <Scale className="w-5 h-5" />,
    content: "Rescheduling must be done at least 7 days in advance. No-shows result in forfeiture of commitment fee. Raw files are not provided unless specifically included in the package."
  }
];

const Terms = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="terms" className="py-40 bg-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
                <span className="text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase mb-4 block">Regulatory</span>
                <h2 className="text-white mb-8">Service <br /><span className="serif-italic font-normal">Protocol</span></h2>
                <p className="text-sm font-light text-white/40 leading-relaxed max-w-sm">
                    Our standards ensure a seamless creative partnership. By engaging our services, you agree to these operational guidelines.
                </p>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-4">
                {termsData.map((term, idx) => (
                    <div 
                        key={idx}
                        className={`p-10 border transition-all cursor-pointer ${
                            activeIdx === idx ? 'border-white bg-white/[0.02]' : 'border-white/10 opacity-40 hover:opacity-100'
                        }`}
                        onClick={() => setActiveIdx(idx)}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-6">
                                <div className={`${activeIdx === idx ? 'text-white' : 'text-white/40'}`}>
                                    {term.icon}
                                </div>
                                <h3 className="text-2xl font-serif text-white">{term.title}</h3>
                            </div>
                            <div className={`transition-transform duration-500 ${activeIdx === idx ? 'rotate-180' : ''}`}>
                                <ChevronDown size={20} />
                            </div>
                        </div>
                        
                        <AnimatePresence>
                            {activeIdx === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="pt-8 text-sm font-normal text-white/80 leading-relaxed border-t border-white/20 mt-8">
                                        {term.content}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
