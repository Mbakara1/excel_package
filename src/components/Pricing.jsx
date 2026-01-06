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
    <section id="packages" className="py-24 bg-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Investment <span className="gold-text">Packages</span></h2>
          <p className="text-white/50">Choose the perfect tier for your special day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 relative flex flex-col ${pkg.highlight ? 'border-[#D4AF37]/40 ring-1 ring-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/5' : ''} ${pkg.extraClass || ''}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">{pkg.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-black mb-6 gold-text">{pkg.price}</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                pkg.highlight || pkg.name === 'Premium' 
                  ? 'bg-[#D4AF37] text-black hover:bg-[#FFDF00]' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                Choose {pkg.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .grid { display: grid; }
        @media (min-width: 768px) { .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1024px) { .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .gap-8 { gap: 2rem; }
      `}} />
    </section>
  );
};

export default Pricing;
