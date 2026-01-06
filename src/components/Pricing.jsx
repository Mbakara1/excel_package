import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: "Ruby",
    price: "₦150k",
    features: ["1 Photographer", "4 Hours Session", "Softcopies only", "10 Retouched Images"],
    description: "Essential documentation for intimate moments."
  },
  {
    name: "Bronze",
    price: "₦200k",
    features: ["1 Photographer", "6 Hours Session", "12x15 Frame", "15 Retouched Images"],
    description: "Extended coverage with physical legacy."
  },
  {
    name: "Silver",
    price: "₦350k",
    features: ["2 Photographers", "Full Day", "20 Page Album", "30 Retouched Images"],
    description: "Comprehensive visual storytelling.",
    highlight: true
  },
  {
    name: "Smart",
    price: "₦400k",
    features: ["2 Photographers", "1 Cinematographer", "3min Highlight Film", "20 Page Album"],
    description: "The intelligent choice for modern events."
  },
  {
    name: "Diamond",
    price: "₦650k",
    features: ["3 Photographers", "2 Cinematographers", "10min Film", "Luxury Album Box"],
    description: "Uncompromising scale and detail."
  },
  {
    name: "Premium",
    price: "Custom",
    features: ["Full Studio Team", "Pre-event Shoot", "4K Drone Coverage", "Lifetime Archival"],
    description: "The ultimate archive of your history."
  }
];

const Pricing = () => {
  return (
    <section id="packages" className="py-40 bg-black border-y border-white/5">
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
                
                <div className="text-5xl font-serif text-white mb-10 relative z-10">{pkg.price}</div>
                
                <ul className="space-y-4 mb-12 flex-grow relative z-10">
                   {pkg.features.map((f, i) => (
                     <li key={i} className="text-[11px] font-medium tracking-widest uppercase text-white/70 flex items-center gap-3">
                        <div className="w-1 h-1 bg-white/40" />
                        {f}
                     </li>
                   ))}
                </ul>
                
                <a href="#book" className={`w-full py-5 text-center text-[10px] font-black tracking-[0.3em] uppercase transition-all relative z-10 ${
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
