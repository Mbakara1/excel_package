import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'The Eternal Vow',
    category: 'Wedding',
    image: '/wedding-hero.png',
    span: 'col-span-2 row-span-2'
  },
  {
    title: 'Identity',
    category: 'Portrait',
    image: '/portrait-studio.png',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Cinematic Stills',
    category: 'Events',
    image: '/cinema-stills.png',
    span: 'col-span-1 row-span-2'
  },
  {
    title: 'Details',
    category: 'Macro',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop', // High quality fallback
    span: 'col-span-1 row-span-1'
  }
];

const GalleryPreview = () => {
  return (
    <section id="gallery" className="py-32 bg-[#050505]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Portfolio</span>
            <h2 className="">Curated <span className="serif italic lg:ml-2">Excellence</span></h2>
            <p className="mt-8 text-white/40 font-light leading-relaxed">
              Every project is an opportunity to redefine the boundary between reality and art. 
              Our portfolio reflects a diverse range of styles, all united by a single standard of perfection.
            </p>
          </div>
          <a href="#" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
            View Archive
            <div className="w-12 h-[1px] bg-[#D4AF37] transition-all group-hover:w-20" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 min-h-[800px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group rounded-lg ${item.span}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-2">{item.category}</p>
                <h4 className="text-2xl font-bold">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
