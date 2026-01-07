import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = {
  weddings: [
    {
      name: "Ruby",
      pricing: { oneDay: "₦350k", twoDay: "₦450k" },
      features: [
        "1 Photo Camera",
        "1 Video Camera",
        "1 Photobook (12x24)",
        "1 Frame (12x16)",
        "Edited Soft Copies",
        "Unedited Images",
        "Flash Drive Delivery"
      ],
      description: "Perfect for intimate celebrations with essential coverage."
    },
    {
      name: "Bronze",
      pricing: { oneDay: "₦450k", twoDay: "₦550k" },
      features: [
        "2 Photo Cameras",
        "1 Video Camera",
        "1 Photobook (12x24)",
        "1 Frame (16x20)",
        "Edited Soft Copies",
        "Unedited Images",
        "Flash Drive Delivery",
        "Pre-wedding Shoot (Optional)"
      ],
      description: "Comprehensive coverage for standard wedding events."
    },
    {
      name: "Smart",
      pricing: { oneDay: "₦700k", twoDay: "₦800k" },
      features: [
        "2 Photo Cameras",
        "2 Video Cameras",
        "1 Drone Pilot",
        "1 Photobook (12x24)",
        "2 Frames (16x20)",
        "Edited Soft Copies",
        "Unedited Images",
        "Flash Drive Delivery",
        "Pre-wedding Shoot (Optional)"
      ],
      description: "Premium cinematic experience with aerial perspectives."
    },
    {
      name: "Diamond",
      pricing: { oneDay: "₦1.1M", twoDay: "₦1.2M" },
      features: [
        "2 Photo Cameras",
        "2 Video Cameras",
        "1 Drone Pilot",
        "1 Ronin",
        "1 Crane/Jib",
        "2 Photobooks (12x24)",
        "2 Frames (20x30)",
        "Edited Soft Copies",
        "Unedited Images",
        "Flash Drive Delivery",
        "Pre-wedding Shoot (Optional)"
      ],
      description: "The ultimate luxury package for grand celebrations.",
      highlight: true
    }
  ],
  burials: [
    {
      name: "Epic",
      pricing: "₦250,000",
      features: [
        "1 Photo Camera",
        "1 Video Camera",
        "1 Ronin + 1 Mic",
        "1 Photobook (10x20)",
        "40 Edited Pictures (2-3 days)",
        "Unedited Soft Copies (Immediate)",
        "Video Thriller (3-5 days)",
        "Full HD Video (2 weeks)"
      ],
      description: "Essential coverage for respectful transitions."
    },
    {
      name: "Excel",
      pricing: "₦400,000",
      features: [
        "2 Photo Cameras",
        "2 Video Cameras",
        "1 Ronin + 1 Mic",
        "1 Photobook (12x24)",
        "40 Edited Pictures (2-3 days)",
        "Unedited Soft Copies (Immediate)",
        "Video Thriller (3-5 days)",
        "Full HD Video (2 weeks)"
      ],
      description: "Comprehensive coverage ensuring every moment is preserved.",
      highlight: true
    },
    {
      name: "Smart",
      pricing: "₦650,000",
      features: [
        "2 Photo Cameras",
        "2 Video Cameras",
        "1 Drone Pilot",
        "1 Ronin + 1 Mic",
        "1 Synthetic Photobook (18x36)",
        "1 Frame (16x20)",
        "40 Edited Pictures (2-3 days)",
        "Unedited Soft Copies (Immediate)",
        "Video Thriller (3-5 days)",
        "Full HD Video (2 weeks)"
      ],
      description: "Premium cinematic experience with aerial coverage."
    }
  ],
  studio: [
    {
      name: "4 Edited",
      pricing: "₦20,000",
      features: [
        "Duration: 45 minutes",
        "One change of clothes allowed",
        "4 Edited Images"
      ],
      description: "Quick professional session for essential portraits."
    },
    {
      name: "8 Edited",
      pricing: "₦37,000",
      features: [
        "Duration: 1 Hour",
        "Two changes of clothes allowed",
        "8 Edited Images"
      ],
      description: "Standard session with multiple looks."
    },
    {
      name: "10 Edited",
      pricing: "₦45,000",
      features: [
        "Duration: 1 Hour 30 minutes",
        "Three changes of clothes allowed",
        "10 Edited Images"
      ],
      description: "Extended session for variety and style."
    },
    {
      name: "15 Edited",
      pricing: "₦70,000",
      features: [
        "Duration: 2 Hours",
        "Four changes of clothes allowed",
        "15 Edited Images"
      ],
      description: "Premium portfolio builder with extensive time.",
      highlight: true
    },
    {
      name: "20 Edited",
      pricing: "₦90,000",
      features: [
        "Duration: 2 Hours",
        "Four changes of clothes allowed",
        "20 Edited Images"
      ],
      description: "The ultimate studio experience for complete coverage."
    }
  ]
};

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('weddings');

  return (
    <section id="pricing" className="py-32 bg-black relative">
      <div className="section-container">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase mb-4 block">Investment</span>
            <h2 className="text-white mb-2">Curated <br/><span className="serif-italic font-normal">Packages</span></h2>
          </div>

          {/* Category Switcher */}
          <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Select Event Type</span>
            <div className="flex bg-white/5 p-1 rounded-full backdrop-blur-sm relative gap-2">
              {['weddings', 'burials', 'studio'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-6 py-3 text-xs font-bold uppercase tracking-widest z-10 transition-colors duration-300"
                  style={{ color: activeCategory === cat ? '#000' : 'rgba(255,255,255,0.4)' }}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white rounded-full shadow-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories[activeCategory].map((pkg, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 md:p-12 border transition-all duration-700 hover:border-white/20 ${pkg.highlight ? 'border-white/20 bg-white/[0.02]' : 'border-white/5 bg-transparent'}`}
            >
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="mb-10 flex justify-end items-baseline relative z-10">
                   {pkg.highlight && (
                     <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">Recommended</span>
                   )}
                </div>

                <div className="mb-12 relative z-10">
                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">{pkg.name}</h3>
                  <p className="text-sm font-light text-white/40 max-w-xs">{pkg.description}</p>
                </div>

                {/* Conditional Pricing Display */}
                <div className="space-y-3 mb-12 relative z-10">
                  {typeof pkg.pricing === 'string' ? (
                     <div className="flex items-baseline gap-4">
                        <span className="text-2xl font-light text-white">{pkg.pricing}</span>
                     </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-white/40">1 Day Event</span>
                        <span className="text-white font-medium">{pkg.pricing.oneDay}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-white/40">2 Day Event</span>
                        <span className="text-[#D4AF37] font-medium">{pkg.pricing.twoDay}</span>
                      </div>
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-12 relative z-10 min-h-[180px]">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm font-light text-white/60 flex items-start gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`#book?package=${encodeURIComponent(
                    activeCategory === 'burials' ? `${pkg.name} (Burial)` : 
                    activeCategory === 'studio' ? `${pkg.name} (Studio)` : 
                    pkg.name
                  )}`}
                  className="inline-block w-full py-4 border border-white/10 text-center text-xs font-bold tracking-[0.2em] text-white uppercase hover:bg-white hover:text-black transition-all duration-500 relative z-10"
                >
                  Secure Date
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
