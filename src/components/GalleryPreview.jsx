import React from 'react';
import { motion } from 'framer-motion';

const ArchiveItem = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden ${item.width} ${item.height} ${item.margin}`}
  >
    <div className="mask-reveal h-full w-full">
        <img 
            src={item.image} 
            alt={item.title} 
            className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <span className="text-[10px] font-bold tracking-widest text-white/60 mb-2 uppercase">{item.category}</span>
        <h3 className="text-3xl font-serif italic text-white leading-none">{item.title}</h3>
    </div>
  </motion.div>
);

const GalleryPreview = () => {
  const collections = [
    {
      title: 'Nuance of White',
      category: 'Portrait',
      image: '/portrait-studio.png',
      width: 'md:w-[45%]',
      height: 'h-[600px]',
      margin: 'md:mt-0 mt-8'
    },
    {
      title: 'Shadow & Light',
      category: 'Wedding',
      image: '/wedding-hero.png',
      width: 'md:w-[35%]',
      height: 'h-[400px]',
      margin: 'md:ml-auto md:-mt-20'
    },
    {
        title: 'Cinematic Flow',
        category: 'Cinema',
        image: '/cinema-stills.png',
        width: 'md:w-full',
        height: 'h-[80vh]',
        margin: 'mt-32'
    }
  ];

  return (
    <section id="gallery" className="py-40 bg-black">
      <div className="section-container">
        <div className="mb-32 flex flex-col md:flex-row items-baseline gap-8">
            <h2 className="text-white">Our <br /><span className="serif-italic ml-4 lg:ml-12 font-normal">Narrative</span></h2>
            <div className="h-[1px] flex-grow bg-white/10 hidden md:block" />
            <p className="max-w-xs text-xs font-light tracking-widest uppercase text-white/40 text-right">Selected Works Collection / Vol 01</p>
        </div>

        <div className="flex flex-wrap gap-y-12">
            {collections.map((item, idx) => (
                <ArchiveItem key={idx} item={item} index={idx} />
            ))}
        </div>
        
        <div className="mt-40 text-center">
             <a href="#" className="text-[12px] font-bold tracking-[0.5em] uppercase hover:text-white/40 transition-all">Explore Entire Archive [→]</a>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
