import React from 'react';
import { motion } from 'framer-motion';

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-6">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-[#D4AF37] text-xs">★</span>
    ))}
  </div>
);

const reviews = [
  {
    id: 1,
    name: 'Jamila Precious',
    role: 'Bride',
    event: 'Wedding, 2025',
    rating: 5,
    text: "I want to give a special shout-out to our wedding photographer, Promise Mbakara of Excel Images. He is honestly one of the very few vendors who delivered his service exceptionally and excellently. Not only did he meet expectations, he went above the package we paid for, and that means a lot. My husband already knew him and trusted his brand, but Excel did not take that familiarity for granted. There was no laziness, no cutting corners, and no 'since we know each other' attitude. Instead, he showed up with full professionalism, respect, and commitment.\n\nWhat stood out to me the most was his patience and communication. Anytime I wasn't comfortable with a picture or had concerns, he would take out time to calm me, explain things calmly, and make sure I was satisfied. Thank you so much, Sir, for ensuring I have beautiful memories to look back on. I recommend Promise Mbakara of Excel Imagery with all confidence. You won't regret it.",
    initials: 'JP',
    featured: true
  },
  {
    id: 2,
    name: 'Gifty Sam',
    role: 'Verified Client',
    event: 'Event Coverage, 2025',
    rating: 5,
    text: "Excel has been reliable over the years, I give it to them at all time. Promise Mbakara — well done.",
    initials: 'GS',
    featured: false
  },
  {
    id: 3,
    name: 'Chidinma Okafor',
    role: 'Bride',
    event: 'Traditional Wedding, 2024',
    rating: 5,
    text: "From the first call to receiving our photos, working with Excel Imagery was seamless. The attention to detail in every shot was incredible. Our families still talk about how beautifully the day was captured.",
    initials: 'CO',
    featured: false
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#050505] py-48 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/2 blur-[150px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-6 block font-sans">Client Words</span>
            <h2 className="text-white leading-[1.1] text-5xl md:text-7xl">
              What They <br />
              <span className="serif-italic font-normal">Say About Us</span>
            </h2>
          </div>
          <p className="text-sm font-light text-white/40 max-w-sm leading-relaxed font-sans">
            Hear from our couples and clients who trusted us with their once-in-a-lifetime stories and memories.
          </p>
        </div>

        {/* Asymmetrical grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Featured Testimonial (Left Column - 3/5 width on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="lg:col-span-3 border border-white/5 bg-gradient-to-br from-[#0a0a0a] to-[#020202] p-8 md:p-12 relative group overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#D4AF37]/25"
          >
            {/* Massive watermark quote mark */}
            <span className="absolute -right-4 -top-8 text-[180px] font-serif italic text-white/2 select-none pointer-events-none group-hover:text-[#D4AF37]/4 transition-colors duration-500">
              “
            </span>

            <div className="flex flex-col h-full justify-between">
              <div>
                <Stars count={5} />
                <blockquote className="text-base md:text-[17px] font-light text-white/80 leading-relaxed font-sans mb-12 whitespace-pre-line italic">
                  "{reviews[0].text}"
                </blockquote>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-white/5 mt-auto">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5">
                  <span className="text-xs font-bold tracking-widest text-[#D4AF37] font-sans">{reviews[0].initials}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-wide font-sans">{reviews[0].name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#D4AF37] font-sans">{reviews[0].event}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-sans font-light">{reviews[0].role}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack (2/5 width on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {reviews.slice(1).map((rev, index) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 * (index + 1), ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="border border-white/5 bg-gradient-to-br from-[#0a0a0a] to-[#020202] p-8 relative group overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#D4AF37]/25"
              >
                {/* Large watermark quote mark */}
                <span className="absolute -right-2 -top-6 text-[140px] font-serif italic text-white/2 select-none pointer-events-none group-hover:text-[#D4AF37]/4 transition-colors duration-500">
                  “
                </span>

                <div className="flex flex-col h-full justify-between">
                  <div>
                    <Stars count={5} />
                    <blockquote className="text-sm font-light text-white/75 leading-relaxed font-sans mb-8 italic">
                      "{rev.text}"
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5">
                      <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] font-sans">{rev.initials}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide font-sans">{rev.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#D4AF37] font-sans">{rev.event}</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                        <span className="text-[9px] text-white/40 uppercase tracking-widest font-sans font-light">{rev.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
