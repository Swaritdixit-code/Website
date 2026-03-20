import { motion } from 'motion/react';
import { Layout, Globe, Calendar, Smartphone, ArrowRight, Zap, Mic, Cpu, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Mic className="w-10 h-10 text-brand-blue" />,
      title: 'AI Voice Receptionist',
      price: '₹14,999 - ₹24,999',
      desc: 'A 24/7 AI-powered voice assistant that handles your business calls, schedules appointments, and answers customer FAQs with human-like precision.',
      features: ['Natural Language Processing', 'Calendar Integration', 'Call Routing', 'Multi-language Support', 'Real-time Analytics']
    },
    {
      icon: <Cpu className="w-10 h-10 text-brand-blue" />,
      title: 'Business Automation',
      price: '₹19,999 - ₹39,999',
      desc: 'Automate repetitive manual tasks across your business. From lead follow-ups to inventory management, we build systems that work while you sleep.',
      features: ['Workflow Automation', 'CRM Integration', 'Automated Email/SMS', 'Data Synchronization', 'Custom API Connections']
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-brand-blue" />,
      title: 'AI Problem Solving',
      price: 'Custom Pricing',
      desc: 'Have a complex business challenge? We leverage advanced AI models to analyze data, optimize processes, and provide strategic solutions tailored to your needs.',
      features: ['Data Analysis', 'Process Optimization', 'Strategic AI Consulting', 'Custom AI Model Training', 'Predictive Modeling']
    },
    {
      icon: <Globe className="w-10 h-10 text-brand-blue" />,
      title: 'AI-Powered Websites',
      price: '₹9,999 - ₹19,999',
      desc: 'High-performance websites integrated with AI tools like chatbots, dynamic content generation, and personalized user experiences.',
      features: ['AI Chatbot Integration', 'Dynamic Content', 'Personalized UX', 'Advanced SEO', 'WhatsApp Automation']
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6">Our <span className="text-gradient">Expertise.</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don't just "make websites." We build tools that solve business problems. From simple landing pages to complex booking systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-3xl group hover:border-brand-blue/30 transition-all"
            >
              <div className="mb-8">{service.icon}</div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-display font-bold">{service.title}</h3>
                <span className="text-brand-blue font-bold text-sm bg-brand-blue/10 px-3 py-1 rounded-full">{service.price}</span>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3 mb-10">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                    <Zap size={14} className="text-brand-blue" /> {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-brand-blue group-hover:gap-4 transition-all">
                Get a Quote <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        <section className="glass rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Need something <span className="text-brand-blue">custom?</span></h2>
              <p className="text-gray-400 mb-8">
                Have a unique business model? We love challenges. Whether it's a custom e-commerce setup for your boutique or a member portal for your gym, we can build it.
              </p>
              <Link to="/contact" className="bg-brand-blue text-brand-dark px-8 py-4 rounded-xl font-bold inline-block">
                Let's Talk Custom
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-32 bg-white/5 rounded-2xl" />
                <div className="h-48 bg-brand-blue/20 rounded-2xl" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-white/5 rounded-2xl" />
                <div className="h-32 bg-white/5 rounded-2xl" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
