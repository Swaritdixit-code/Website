import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, Users, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-brand-blue text-xs font-bold mb-6 uppercase tracking-widest">
              <Zap size={14} /> AIautomation: The Future of Business
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] mb-6">
              Automate Your Growth with <span className="text-gradient">AI Solutions.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              We don't just build websites. We build AI Voice Receptionists, solve complex business problems, and automate your entire workflow so you can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-brand-blue text-brand-dark px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                Start My Project <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="glass px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-blue/20">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Web Design Mockup" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-20 bg-brand-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Local Clients', value: '150+', icon: <Users className="text-brand-blue" /> },
            { label: 'Avg. ROI Increase', value: '45%', icon: <BarChart3 className="text-brand-blue" /> },
            { label: 'Projects Done', value: '200+', icon: <CheckCircle2 className="text-brand-blue" /> },
            { label: 'Cities Served', value: 'Hyderabad', icon: <Globe className="text-brand-blue" /> },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Designed for <span className="text-brand-blue">Your Business</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We specialize in the industries that power Hyderabad. No generic templates, just custom solutions for local heroes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'AI Voice Receptionist', desc: '24/7 AI-powered voice assistant to handle bookings and inquiries.', img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=600' },
              { title: 'Business Automation', desc: 'Automate repetitive tasks and workflows to save time and money.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600' },
              { title: 'Problem Solving', desc: 'Custom AI solutions for your most complex business challenges.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden glass aspect-[4/5]"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{item.desc}</p>
                  <Link to="/services" className="text-brand-blue font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Video Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-brand-blue text-[10px] font-bold mb-6 uppercase tracking-widest">
                <Zap size={14} /> The Digital Factory
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">How We Turn <span className="text-gradient">Pixels into Profit.</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Watch our AI-enhanced design process in action. We combine human creativity with cutting-edge technology to build high-converting websites that sell. No faces, just pure digital craftsmanship.
              </p>
              <div className="space-y-4">
                {[
                  'AI-Assisted Layout Generation',
                  'Human-Centric UX Refinement',
                  'Automated Performance Optimization',
                  'Instant Market Integration'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-brand-blue" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden glass aspect-video group shadow-2xl shadow-brand-blue/10"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-80"
              >
                <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=7b0d46086c2929e4c13f5692228d072058ca5d18&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Live Build Process</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-32 bg-brand-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">How We <span className="text-brand-blue">Work</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From coffee to launch, we follow a proven process to ensure your business gets the best digital home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/5 z-0" />
            {[
              { step: '01', title: 'Discovery', desc: 'We meet over coffee to understand your business goals and local competition.' },
              { step: '02', title: 'Design', desc: 'We create a custom visual identity that resonates with Hyderabad customers.' },
              { step: '03', title: 'Build', desc: 'Our developers bring the design to life with high-performance code.' },
              { step: '04', title: 'Launch', desc: 'We go live, optimize for Google, and train you on how to manage it.' },
            ].map((item, i) => (
              <div key={i} className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue text-brand-dark flex items-center justify-center font-display font-black text-2xl mb-8 shadow-lg shadow-brand-blue/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Trusted by <span className="text-brand-blue">Local Heroes</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Here's what Hyderabad's business owners have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Dr. Ramesh K.', 
                biz: 'City Ortho Clinic', 
                text: 'HYDWEB transformed our clinic\'s digital presence. We now get 40% of our appointments through the website. Highly recommended for any doctor in Hyderabad.',
                img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
              },
              { 
                name: 'Anjali Reddy', 
                biz: 'Glow & Grace Salon', 
                text: 'The booking system they built is a lifesaver. No more missed calls or double bookings. My salon is now fully digital and my customers love it!',
                img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
              },
              { 
                name: 'Vikram Singh', 
                biz: 'The Iron Den Gym', 
                text: 'Best web agency in Hyderabad, hands down. They understood exactly what my gym needed. The mobile speed is incredible.',
                img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-brand-blue/30" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-[10px] text-brand-blue uppercase font-bold tracking-widest">{t.biz}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm italic leading-relaxed">"{t.text}"</p>
                <div className="absolute top-8 right-8 text-brand-blue/10">
                  <Zap size={40} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-3xl rounded-full -mr-32 -mt-32" />
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 relative z-10">Ready to dominate the <span className="text-brand-blue">local market?</span></h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">Don't let your competitors take your customers. Let's build a website that works as hard as you do.</p>
          <Link to="/contact" className="bg-brand-blue text-brand-dark px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center gap-3 hover:scale-105 transition-transform relative z-10">
            Book Your Free Consultation <Zap size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
