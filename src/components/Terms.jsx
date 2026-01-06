import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, Clock, FileText, Scale, AlertCircle, Calendar } from 'lucide-react';

const termsData = [
  {
    title: "Payment Structure",
    icon: <ShieldCheck className="w-5 h-5" />,
    content: "20% non-refundable date booking fee must be paid at least 2 months before the event. 60% of total sum must be paid at least 2 weeks before the event. Remaining 20% must be paid before delivery, at most 30 working days after the event. All fees paid are non-refundable."
  },
  {
    title: "Delivery Timeline",
    icon: <Clock className="w-5 h-5" />,
    content: "All deliveries will be made within 30 working days from completion of full payment and photobook picture selection. If job is not delivered after 90 working days, Excel Imagery shall pay ₦10,000 to the client for every month the job remains undelivered."
  },
  {
    title: "Date Changes & Extensions",
    icon: <Calendar className="w-5 h-5" />,
    content: "Change of event date attracts an additional fee of ₦100,000. Clients must make full payment within 90 working days after their event. Extension requests after 90 days attract ₦1,000 daily storage fee. Clients must notify via SMS or social media to activate extension."
  },
  {
    title: "File Safety & Liability",
    icon: <AlertCircle className="w-5 h-5" />,
    content: "Excel Imagery guarantees job safety for 90 working days after the event. After 90 days, we shall not be held responsible for any loss or damage unless extension request has been made. Excel Imagery will not be held responsible for job loss after 90 working days."
  },
  {
    title: "Copyright & Usage",
    icon: <FileText className="w-5 h-5" />,
    content: "Excel Imagery retains full copyright of all images and the right to use images for display, advertising, publication, and promotional purposes."
  },
  {
    title: "Client Cooperation",
    icon: <Scale className="w-5 h-5" />,
    content: "The client shall assist and cooperate with the photographer in obtaining desired photographs, including specifying persons and scenes to be photographed. The photographer shall not be responsible for photographs not taken due to client's failure to provide reasonable assistance or cooperation."
  }
];

const Terms = () => {
  const [activeIdx, setActiveIdx] = useState(null);

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
                        onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
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
