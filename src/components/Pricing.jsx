import React from 'react';
import { Check, Star, Zap, Crown, Award, Gem } from 'lucide-react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: 'Ruby',
    price: '₦350k',
    icon: <Star className="w-6 h-6 text-[#D4AF37]" />,
    features: [
      '1 Photo/1 Video camera',
      '10x20 Photobook',
      '2 Enlargements',
      '20 Edited soft copies'
    ],
    highlight: false
  },
  {
    name: 'Bronze',
    price: '₦450k',
    icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
    features: [
      '2 Photo/2 Video cameras',
      'Interview Mic',
      '12x24 Regular Photobook',
      '25 Edited soft copies'
    ],
    highlight: false
  },
  {
    name: 'Silver',
    price: '₦600k',
    icon: <Zap className="w-6 h-6 text-[#D4AF37]" />,
    features: [
      'Adds Ronin (Stabilizer)',
      '12x30 Photobook',
      '35 Edited soft copies',
      'Google Drive upload'
    ],
    highlight: false
  },
  {
    name: 'Smart',
    price: '₦700k',
    icon: <Crown className="w-6 h-6 text-[#D4AF37]" />,
    features: [
      'Adds Drone Coverage',
      'Synthetic Photobook',
      '2 Canvas prints',
      '40 Edited soft copies'
    ],
    highlight: true
  },
  {
    name: 'Diamond',
    price: '₦1.1M',
    icon: <Gem className="w-6 h-6 text-[#D4AF37]" />,
    features: [
      '3 Photo cameras',
      '3-in-1 Canvas',
      'Synthetic + Regular Photobooks',
      'Premium Box'
    ],
    highlight: false
  },
  {
    name: 'Premium',
    price: '₦2M',
    icon: <Crown className="w-10 h-10 text-[#FFDF00]" />, // Extra large/gold for highest tier
    features: [
      '3 Photo/3 Video cameras',
      '360 Photo Booth Included',
      '5-in-1 Canvas',
      '2 Acrylic Box Photobooks',
      'Content Creation & Backdrop',
      'Branding materials'
    ],
    highlight: false,
    extraClass: 'border-[#D4AF37]/50'
  }
];

const Pricing = () => {
  return (
    <section id="packages" className="py-32 bg-[#050505]">
      <div className="section-container">
        <div className="max-w-xl mb-24">
          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Collections</span>
          <h2 className="mb-8">Investment <span className="serif italic">Packages</span></h2>
          <p className="text-white/40 font-light leading-relaxed">
            Transparent pricing for non-compromised quality. Select the tier that best captures the scale and soul of your occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-0 relative flex flex-col group`}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-8 relative">
                <div className="absolute inset-0 bg-[#111] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-8 top-12">
                   <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">{pkg.icon}</div>
                   <h3 className="text-3xl font-light tracking-tight mb-2">{pkg.name}</h3>
                   <div className="text-xl font-bold gold-text">{pkg.price}</div>
                </div>
                
                <div className="absolute inset-x-8 bottom-12">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-xs font-light tracking-wide text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 text-[10px] font-black tracking-[0.3em] uppercase transition-all border ${
                    pkg.highlight || pkg.name === 'Premium' 
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37]' 
                      : 'border-white/10 text-white hover:border-white/40'
                  }`}>
                    Select {pkg.name}
                  </button>
                </div>

                {pkg.highlight && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Signature
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
