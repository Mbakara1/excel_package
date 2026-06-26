import React from 'react';
import { motion } from 'framer-motion';

// Real reviews from clients. Replace PLACEHOLDER review with a real one when available.
const reviews = [
  {
    name: 'Jamila Precious',
    event: 'Wedding, 2025',
    rating: 5,
    text: 'I want to give a special shout-out to our wedding photographer, Promise Mbakara of Excel Images. He is honestly one of the very few vendors who delivered his service exceptionally and excellently. Not only did he meet expectations, he went above the package we paid for, and that means a lot. My husband already knew him and trusted his brand, but Excel did not take that familiarity for granted. There was no laziness, no cutting corners, and no "since we know each other" attitude. Instead, he showed up with full professionalism, respect, and commitment. What stood out to me the most was his patience and communication. Anytime I wasn\'t comfortable with a picture or had concerns, he would take out time to calm me, explain things calmly, and make sure I was satisfied. Thank you so much, Sir, for ensuring I have beautiful memories to look back on. I recommend Promise Mbakara of Excel Imagery with all confidence. You won\'t regret it.',
    real: true,
  },
  {
    name: 'Gifty Sam',
    event: 'Event Coverage, 2025',
    rating: 5,
    text: 'Excel has been reliable over the years, I give it to them at all time. Promise Mbakara — well done.',
    real: true,
  },
  {
    // PLACEHOLDER — replace with a real client review
    name: 'Chidinma Okafor',
    event: 'Traditional Wedding, 2024',
    rating: 5,
    text: 'From the first call to receiving our photos, working with Excel Imagery was seamless. The attention to detail in every shot was incredible. Our families still talk about how beautifully the day was captured.',
    real: false,
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-[#D4AF37] text-sm">★</span>
    ))}
  </div>
);

const Testimonials = () => (
  <section className="bg-[#050505] py-32 border-t border-white/10">
    <div className="section-container">
      <div className="mb-16">
        <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-4 block">Client Words</span>
        <h2 className="text-white leading-[1.1]">
          What They <br /><span className="serif-italic font-normal">Say About Us</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-white/10 p-8 bg-black/40 flex flex-col"
          >
            <Stars count={review.rating} />
            <p className="text-sm font-light text-white/70 leading-relaxed flex-1 italic mb-8">
              "{review.text}"
            </p>
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-bold text-white tracking-wide">{review.name}</p>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mt-1">{review.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
