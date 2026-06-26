import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    heading: 'Cinematic Eye',
    body: "We don't just shoot — we direct your story. Every frame is composed with intention, every moment anticipated before it happens.",
  },
  {
    number: '02',
    heading: 'On-time Delivery',
    body: 'Your gallery is delivered within the agreed timeline. Always. No chasing, no excuses — just your memories, on time.',
  },
  {
    number: '03',
    heading: 'Personal Experience',
    body: "From your first enquiry to your final delivery, Promise is with you. You're not a booking — you're a story we're honoured to tell.",
  },
];

const WhyUs = () => (
  <section className="bg-[#050505] py-48 border-t-4 border-white/5">
    <div className="section-container">
      <div className="mb-24">
        <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-6 block">Why Excel Imagery</span>
        <h2 className="text-white leading-[1.1]">
          The Difference <br /><span className="serif-italic font-normal">You'll Feel</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
        {pillars.map((p, i) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className={`pt-12 pb-8 pr-8 ${i > 0 ? 'md:pl-8 md:border-l border-white/10' : ''}`}
          >
            <span className="text-[80px] font-black text-[#D4AF37]/10 leading-none block mb-4">{p.number}</span>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{p.heading}</h3>
            <p className="text-sm font-light text-white/50 leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
