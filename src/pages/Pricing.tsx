import { motion } from 'motion/react';
import { Check, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const tiers = [
    {
      name: 'AI Starter',
      price: '9,999',
      desc: 'Perfect for businesses starting their AI automation journey.',
      features: {
        'AI Website': 'Single Page',
        'AI Chatbot': 'Basic',
        'Voice Receptionist': false,
        'Workflow Automation': '1 Process',
        'Mobile Responsive': true,
        'SEO Optimization': 'Basic',
        'Custom Domain': false,
        'Support': 'Email Only'
      }
    },
    {
      name: 'AI Business',
      price: '19,999',
      desc: 'Our most popular plan for full business automation.',
      featured: true,
      features: {
        'AI Website': 'Up to 5 Pages',
        'AI Chatbot': 'Advanced',
        'Voice Receptionist': 'Basic',
        'Workflow Automation': '3 Processes',
        'Mobile Responsive': true,
        'SEO Optimization': 'Advanced',
        'Custom Domain': true,
        'Support': 'Priority Email'
      }
    },
    {
      name: 'AI Enterprise',
      price: '39,999',
      desc: 'Complete AI transformation for your entire business.',
      features: {
        'AI Website': 'Unlimited',
        'AI Chatbot': 'Custom Trained',
        'Voice Receptionist': 'Full Featured',
        'Workflow Automation': 'Unlimited',
        'Mobile Responsive': true,
        'SEO Optimization': 'Premium',
        'Custom Domain': true,
        'Support': '24/7 Priority'
      }
    }
  ];

  const featureList = [
    'AI Website',
    'AI Chatbot',
    'Voice Receptionist',
    'Workflow Automation',
    'Mobile Responsive',
    'SEO Optimization',
    'Custom Domain',
    'Support'
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6">Simple <span className="text-gradient">Pricing.</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No hidden fees. No monthly retainers. Just high-quality web design at a price that makes sense for Hyderabad's small businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-3xl glass flex flex-col ${tier.featured ? 'border-brand-blue/50 ring-1 ring-brand-blue/50 scale-105 z-10' : 'border-white/10'}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-black">₹{tier.price}</span>
                  <span className="text-gray-500 text-sm">one-time</span>
                </div>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">{tier.desc}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {featureList.map((feature) => {
                  const val = tier.features[feature as keyof typeof tier.features];
                  return (
                    <div key={feature} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{feature}</span>
                      <span className="font-medium">
                        {typeof val === 'boolean' ? (
                          val ? <Check size={18} className="text-brand-blue" /> : <X size={18} className="text-gray-600" />
                        ) : (
                          <span className="text-brand-blue">{val}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link 
                to="/contact" 
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${tier.featured ? 'bg-brand-blue text-brand-dark hover:scale-105' : 'glass hover:bg-white/10'}`}
              >
                Choose {tier.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-brand-blue text-[10px] font-bold mb-6 uppercase tracking-widest">
              <Zap size={14} /> All Plans Include
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Free SSL Certificate for 1 Year',
                'Business Email Setup Assistance',
                'WhatsApp Chat Integration',
                'Google My Business Optimization',
                '1 Month Post-Launch Support',
                'High-Speed Hosting Setup'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <Check size={18} className="text-brand-blue shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
