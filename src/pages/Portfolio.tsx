import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Tag, X, MapPin, BarChart3, Globe } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  location: string;
  img: string;
  result: string;
  longDesc: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Beauty & Wellness', 'Healthcare', 'Fitness', 'Restaurant', 'Contractor', 'Pet Care'];

  const projects: Project[] = [
    {
      title: 'Glow & Grace Salon',
      category: 'Beauty & Wellness',
      location: 'Banjara Hills',
      img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
      result: '120% increase in online bookings',
      longDesc: 'We implemented a custom booking engine that reduced front-desk workload by 40% and allowed customers to book appointments 24/7. The mobile-first design specifically targeted the high-end demographic of Banjara Hills.'
    },
    {
      title: 'City Ortho Clinic',
      category: 'Healthcare',
      location: 'Secunderabad',
      img: 'https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=800',
      result: 'Reduced phone inquiries by 60%',
      longDesc: 'The clinic needed a way to manage patient flow. We built a patient portal with downloadable forms and an automated appointment reminder system, significantly improving operational efficiency.'
    },
    {
      title: 'The Iron Den Gym',
      category: 'Fitness',
      location: 'Gachibowli',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      result: '50+ new member signups in month 1',
      longDesc: 'A high-energy landing page with integrated member registration. We focused on speed and mobile performance to capture the young professional crowd in Gachibowli.'
    },
    {
      title: 'Spice Route Kitchen',
      category: 'Restaurant',
      location: 'Jubilee Hills',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      result: 'Seamless online menu & ordering',
      longDesc: 'We created a digital menu that is easy to update and integrated with local delivery partners. The visual design focuses on high-quality food photography to drive hunger and orders.'
    },
    {
      title: 'Elite Home Builders',
      category: 'Contractor',
      location: 'Kukatpally',
      img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
      result: 'High-quality lead generation',
      longDesc: 'A professional portfolio for a construction firm. We emphasized trust, past projects, and clear calls to action for quote requests.'
    },
    {
      title: 'Pet Paradise',
      category: 'Pet Care',
      location: 'Madhapur',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      result: '3x more grooming appointments',
      longDesc: 'A friendly, colorful site with a pet-specific booking system. We integrated a gallery of "happy clients" which significantly increased trust and conversion.'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6">Our <span className="text-gradient">Impact.</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real results for real businesses in Hyderabad. We take pride in seeing our clients grow.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-brand-blue text-brand-dark' : 'glass text-gray-400 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden glass aspect-[3/4] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    <Tag size={12} /> {project.category}
                  </div>
                </div>

                <div className="absolute bottom-0 p-8 w-full">
                  <div className="text-xs text-gray-400 mb-1">{project.location}</div>
                  <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                  <div className="p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20 mb-6">
                    <div className="text-[10px] uppercase tracking-widest text-brand-blue font-bold mb-1">Success Metric</div>
                    <div className="text-sm font-medium text-white">{project.result}</div>
                  </div>
                  <div className="w-full py-3 rounded-xl glass font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-brand-blue group-hover:text-brand-dark transition-all">
                    View Case Study <ExternalLink size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-full relative">
                    <img 
                      src={selectedProject.img} 
                      alt={selectedProject.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest mb-4">
                      <Tag size={14} /> {selectedProject.category}
                    </div>
                    <h2 className="text-4xl font-display font-bold mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
                      <MapPin size={14} /> {selectedProject.location}
                    </div>

                    <div className="space-y-6 mb-10">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">The Challenge</h4>
                        <p className="text-gray-300 leading-relaxed text-sm">{selectedProject.longDesc}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <BarChart3 className="text-brand-blue mb-2" size={20} />
                          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Impact</div>
                          <div className="text-xs font-bold">{selectedProject.result}</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <Globe className="text-brand-blue mb-2" size={20} />
                          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Status</div>
                          <div className="text-xs font-bold">Live & Scaling</div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-brand-blue text-brand-dark py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                      Visit Live Website <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="mt-32 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Your business could be next.</h2>
          <button className="bg-brand-blue text-brand-dark px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
            Start Your Success Story
          </button>
        </div>
      </div>
    </div>
  );
}
