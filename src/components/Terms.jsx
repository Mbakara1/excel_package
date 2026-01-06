import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Clock, Scale, Star } from 'lucide-react';

const terms = [
  {
    id: 'payment',
    title: 'Payment & Booking',
    icon: <Star className="w-5 h-5" />,
    content: (
      <ul className="space-y-2 list-disc pl-4">
        <li>20% non-refundable booking fee required to secure your date (at least 2 months prior).</li>
        <li>60% payment must be made 2 weeks before the event.</li>
        <li>20% balance must be cleared before the final delivery of works.</li>
      </ul>
    )
  },
  {
    id: 'delivery',
    title: 'Delivery Timelines',
    icon: <Clock className="w-5 h-5" />,
    content: (
      <p>
        Standard delivery is within <strong>30 working days</strong> post-event. 
        In the rare case of late delivery (exceeding 90 days), a <strong>₦10,000 monthly penalty</strong> 
        will be credited to the client.
      </p>
    )
  },
  {
    id: 'safety',
    title: 'File Safety & Storage',
    icon: <ShieldCheck className="w-5 h-5" />,
    content: (
      <p>
        File safety is guaranteed for <strong>90 working days</strong> after the event. 
        Extensions for storage beyond this period can be requested at a rate of <strong>₦1,000 daily</strong>.
      </p>
    )
  },
  {
    id: 'policies',
    title: 'Policies & Cancellations',
    icon: <Scale className="w-5 h-5" />,
    content: (
      <ul className="space-y-2 list-disc pl-4">
        <li>Date changes attract a <strong>₦100,000 fee</strong>, subject to availability.</li>
        <li>Excel Imagery retains the right to use works for promotional and portfolio purposes unless otherwise agreed in writing.</li>
      </ul>
    )
  }
];

const Terms = () => {
  const [openId, setOpenId] = useState('payment');

  return (
    <section id="terms" className="py-24 bg-black border-t border-white/5">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Terms & <span className="gold-text">Conditions</span></h2>
          <p className="text-white/40">Our commitment to professional service standards</p>
        </div>

        <div className="space-y-4">
          {terms.map((item) => (
            <div key={item.id} className="glass-card overflow-hidden">
              <button 
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div className="flex items-center gap-4" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span className="text-[#D4AF37]">{item.icon}</span>
                  <span className="font-semibold">{item.title}</span>
                </div>
                {openId === item.id ? <ChevronUp className="w-5 h-5 text-[#D4AF37]" /> : <ChevronDown className="w-5 h-5 text-white/30" />}
              </button>
              
              {openId === item.id && (
                <div className="p-6 pt-0 text-white/60 text-sm border-t border-white/5 animate-fade-in">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
