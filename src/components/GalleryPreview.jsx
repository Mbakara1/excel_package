import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const narrativeItems = [
  {
    title: 'Timeless Union',
    plate: '01',
    category: 'Wedding',
    description: 'Every love story deserves to be beautifully told. We capture the unique, unrepeatable moments that define your journey together.',
    image: '/wedding-moment-1.jpg'
  },
  {
    title: 'Precious Moments',
    plate: '02',
    category: 'Celebration',
    description: 'Through continuous innovation and a distinctive eye, we preserve the emotions and details that make your celebration extraordinary.',
    image: '/wedding-moment-2.jpg'
  },
  {
    title: 'Eternal Elegance',
    plate: '03',
    category: 'Luxury',
    description: 'Leading luxury wedding photography that transforms fleeting moments into timeless treasures, crafted with unparalleled artistry.',
    image: '/wedding-moment-3.jpg'
  }
];

const NarrativeSection = ({ item, index }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={container} className="min-h-screen flex flex-col md:flex-row items-center gap-20 py-32 md:py-0">
      <div className="w-full md:w-1/2 overflow-hidden h-[60vh] md:h-[80vh] relative group">
        <motion.img 
          style={{ scale, y }}
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover brightness-95 group-hover:brightness-100 transition-all duration-1000"
        />
        <div className="absolute top-8 left-8">
            <span className="text-[120px] font-serif italic text-white/10 select-none leading-none">{item.plate}</span>
        </div>
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="w-full md:w-1/3 text-left px-4 md:px-0"
      >
        <span className="text-[10px] font-bold tracking-[0.5em] text-[#D4AF37] uppercase mb-4 block">{item.category}</span>
        <h3 className="text-5xl md:text-7xl mb-8 leading-tight">{item.title}</h3>
        <p className="text-sm font-light tracking-widest leading-relaxed text-white/40 max-w-sm">
          {item.description}
        </p>
        <div className="mt-12 h-[1px] w-20 bg-white/20" />
      </motion.div>
    </div>
  );
};

const GalleryPreview = () => {
  return (
    <section id="gallery" className="bg-black">
      {/* Editorial Divider */}
      <div className="mx-6 md:mx-12 lg:mx-20 flex justify-between items-start pt-6">
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">03 — Archive</span>
      </div>

      <div className="section-container pt-32">
        {/* Intro */}
        <div className="mb-40 max-w-4xl">
            <span className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-6 block">Our Portfolio</span>
            <h2 className="text-white mb-12 leading-[1.3]">Captured <br /><span className="serif-italic font-normal">Moments</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                <p className="text-sm font-light text-white/40 leading-relaxed italic">
                    "Every wedding tells a unique story. Through innovation and artistry, we preserve the timeless moments that define your love."
                </p>
                <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase leading-loose">
                    Excel Imagery — The leading provider of luxury wedding photography and cinematography, dedicated to beautiful storytelling.
                </p>
            </div>
        </div>

        {/* Vertical Items */}
        <div className="space-y-40">
            {narrativeItems.map((item, idx) => (
                <NarrativeSection key={idx} item={item} index={idx} />
            ))}
        </div>

        {/* Outro */}
        <div className="py-60 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <p className="text-[10px] font-bold tracking-[0.8em] text-white/30 uppercase mb-12">End of Volume 01</p>
                <h2 className="text-white mb-20 text-6xl md:text-9xl tracking-tighter">FIN.</h2>
                <div className="flex justify-center gap-12">
                   <a href="#book" className="text-[12px] font-black tracking-[0.3em] uppercase border-b border-white py-2 hover:opacity-50 transition-all">Commission Vol 02</a>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
