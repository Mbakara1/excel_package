import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: "Ruby",
    pricing: {
      oneDay: "₦350k",
      twoDay: "₦450k"
    },
    features: [
      "1 Photo Camera",
      "1 Video Camera",
      "2 Enlargements (10x12)",
      "1 Photobook (10x20)",
      "Video Thriller",
      "2 Reels",
      "20 Edited Soft Copies",
      "Full Event Videos (Flash Drive)",
      "All Photos (Flash Drive)"
    ],
    description: "Essential luxury storytelling for intimate celebrations.",
    note: "Flash drive provided by client"
  },
  {
    name: "Bronze",
    pricing: {
      oneDay: "₦450k",
      twoDay: "₦550k"
    },
    features: [
      "2 Photo Cameras",
      "2 Video Cameras",
      "1 Mic for Interviews/Video",
      "2 Portraits (12x15)",
      "1 Regular Photobook (12x24)",
      "2 Video Thrillers",
      "2 Reels",
      "25 Edited Soft Copies",
      "Full Event Videos (Flash Drive)",
      "All Photos (Flash Drive)",
      "Pre-wedding Photos (Optional)"
    ],
    description: "Elevated coverage capturing every precious moment."
  },
  {
    name: "Silver",
    pricing: {
      oneDay: "₦600k",
      twoDay: "₦700k"
    },
    features: [
      "2 Photo Cameras",
      "2 Video Cameras",
      "1 Mic + 1 Ronin",
      "2 Portraits (16x20)",
      "1 Photobook (12x30)",
      "2 Video Thrillers",
      "3 Reels",
      "35 Edited Soft Copies",
      "Google Drive Upload",
      "Bridal Shower Photos (Optional)",
      "Pre-wedding Photos (Optional)"
    ],
    description: "Innovative multi-platform delivery and timeless artistry.",
    highlight: true
  },
  {
    name: "Smart",
    pricing: {
      oneDay: "₦700k",
      twoDay: "₦800k"
    },
    features: [
      "2 Photo Cameras",
      "2 Video Cameras",
      "1 Mic + 1 Ronin + 1 Drone",
      "2 Canvas Prints (16x20)",
      "1 Synthetic Photobook (12x24)",
      "2 Video Thrillers",
      "3 Reels",
      "40 Edited Soft Copies",
      "Google Drive Upload",
      "Bridal Shower Photos (Optional)",
      "Pre-wedding Photos (Optional)"
    ],
    description: "Cutting-edge aerial cinematography and unique perspectives."
  },
  {
    name: "Diamond",
    pricing: {
      oneDay: "₦1.1M",
      twoDay: "₦1.2M"
    },
    features: [
      "3 Photo Cameras",
      "2 Video Cameras",
      "1 Mic + 1 Ronin + 1 Drone",
      "3-in-1 Canvas Print",
      "1 Synthetic + 1 Regular Photobook",
      "2 Video Thrillers",
      "3 Reels",
      "40 Edited Soft Copies",
      "Google Drive Upload",
      "Bridal Shower Photos (Optional)",
      "Pre-wedding Photos (Optional)"
    ],
    description: "Comprehensive luxury experience with unparalleled service."
  }
];

const Pricing = () => {
  return (
    <section id="packages" className="py-40 pb-60 bg-black border-y border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-32">
          <div className="lg:col-span-12">
             <h2 className="text-white text-center">Portfolio <br /><span className="serif-italic font-normal">Booking</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {packages.map((pkg, idx) => (
             <motion.div 
               key={pkg.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: idx * 0.1 }}
               viewport={{ once: true }}
               className={`p-12 border border-white/10 flex flex-col group hover:border-white/30 transition-all duration-500 relative overflow-hidden ${
                 pkg.highlight ? 'bg-white/[0.02]' : 'bg-transparent'
               }`}
             >
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="mb-10 flex justify-between items-baseline relative z-10">
                   <h3 className="text-2xl font-serif italic text-white/40 group-hover:text-white/60 transition-colors">Vol. {idx + 1}</h3>
                   {pkg.highlight && (
                     <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">Recommended</span>
                   )}
                </div>
                
                <h4 className="text-4xl font-sans font-bold tracking-tighter mb-4 text-white relative z-10">{pkg.name}</h4>
                <p className="text-xs font-normal text-white/50 tracking-wide mb-8 uppercase line-clamp-2 md:h-8 relative z-10">{pkg.description}</p>
                
                {/* Dual Pricing Display */}
                <div className="grid grid-cols-2 gap-3 mb-10 relative z-10">
                  {/* 1 Day Pricing */}
                  <div className="border border-white/10 p-4 flex flex-col items-center justify-center hover:border-white/20 transition-all duration-300">
                    <div className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3">1 Day</div>
                    <div className="text-2xl font-serif text-white">{pkg.pricing.oneDay}</div>
                  </div>
                  
                  {/* 2 Days Pricing */}
                  <div className="border border-white/10 p-4 flex flex-col items-center justify-center hover:border-white/20 transition-all duration-300">
                    <div className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3">2 Days</div>
                    <div className="text-2xl font-serif text-white">{pkg.pricing.twoDay}</div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-12 flex-grow relative z-10">
                   {pkg.features.map((f, i) => (
                     <li key={i} className="text-[11px] font-medium tracking-widest uppercase text-white/70 flex items-center gap-3">
                        <div className="w-1 h-1 bg-white/40" />
                        {f}
                     </li>
                   ))}
                </ul>
                
                <a href={`#book?package=${pkg.name}`} className={`w-full py-5 text-center text-[10px] font-black tracking-[0.3em] uppercase transition-all relative z-10 ${
                    pkg.highlight ? 'bg-white text-black hover:bg-white/90' : 'border border-white/20 text-white/60 hover:text-white hover:border-white hover:bg-white/5'
                }`}>
                    Secure Date
                </a>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
