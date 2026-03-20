import { motion } from 'motion/react';
import { MapPin, Heart, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8">
            We're <span className="text-gradient">Local.</span> Just Like You.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Based in the heart of Hyderabad, we started AIautomation with a simple mission: to empower businesses with the next generation of AI tools and automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-display font-bold text-brand-blue mb-1">5+ Years</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">In Hyderabad Market</div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              It started in a small cafe in Gachibowli. We noticed that while big tech was booming, local salons, clinics, and restaurants were being left behind with outdated websites or none at all.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              We decided to change that. We don't use offshore teams or generic templates. We live here, we eat at your restaurants, and we visit your clinics. We understand the Hyderabad market better than any global agency ever could.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <MapPin className="text-brand-blue" />, title: 'Hyper-Local', desc: 'We know the local areas from Banjara Hills to Uppal.' },
                { icon: <Heart className="text-brand-blue" />, title: 'Small Biz First', desc: 'Our heart is with the local entrepreneurs.' },
                { icon: <Target className="text-brand-blue" />, title: 'Result Driven', desc: 'We focus on leads, not just pretty pixels.' },
                { icon: <Award className="text-brand-blue" />, title: 'Quality Code', desc: 'Modern tech for maximum performance.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">The Team</h2>
            <p className="text-gray-400">The creative minds behind your digital growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Arjun Reddy', role: 'Founder & Lead Designer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
              { name: 'Priya Sharma', role: 'Strategy & Marketing', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
              { name: 'Siddharth Rao', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-2 border-brand-blue/20">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-brand-blue font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
