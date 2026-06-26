import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 200, suffix: '+', label: 'Weddings Covered' },
  { value: 7,   suffix: '',  label: 'Years Experience' },
  { value: 15,  suffix: '+', label: 'Cities' },
  { value: 4.9, suffix: '★', label: 'Google Rating' },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value, isDecimal]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-[#D4AF37]">
      {isDecimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
};

const StatsBar = () => (
  <section className="bg-[#050505] border-y border-white/10 py-20">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center text-center py-8 px-4 ${
              i < stats.length - 1 ? 'border-r border-white/10' : ''
            }`}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mt-2">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
