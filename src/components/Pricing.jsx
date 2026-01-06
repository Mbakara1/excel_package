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
             <h2 className="text-white text-center">Portfolio <br /><span className="serif-italic font-normal">Investment</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
           {packages.map((pkg, idx) => (
             <motion.div 
               key={pkg.name}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1, delay: idx * 0.1 }}
               viewport={{ once: true }}
               className={`p-12 border-white/10 ${idx % 3 !== 2 ? 'md:border-r' : ''} ${idx >= 3 ? 'border-t' : ''} flex flex-col group hover:bg-white/[0.02] transition-colors`}
             >
                <div className="mb-10 flex justify-between items-baseline">
                   <h3 className="text-2xl font-serif italic text-white/40 group-hover:text-white transition-colors">Vol. {idx + 1}</h3>
                   <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">{pkg.highlight ? 'Recommended' : ''}</span>
                </div>
                
                <h4 className="text-4xl font-sans font-bold tracking-tighter mb-4 text-white">{pkg.name}</h4>
                <p className="text-xs font-light text-white/30 tracking-wide mb-8 uppercase">{pkg.description}</p>
                
                <div className="text-5xl font-serif text-white mb-10">{pkg.price}</div>
                
                <ul className="space-y-4 mb-12 flex-grow">
                   {pkg.features.map((f, i) => (
                     <li key={i} className="text-[11px] font-medium tracking-widest uppercase text-white/50 flex items-center gap-3">
                        <div className="w-1 h-1 bg-white/20" />
                        {f}
                     </li>
                   ))}
                </ul>
                
                <a href="#book" className={`w-full py-5 text-center text-[10px] font-black tracking-[0.3em] uppercase transition-all ${
                    pkg.highlight ? 'bg-white text-black' : 'border border-white/10 text-white/40 hover:text-white hover:border-white'
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
