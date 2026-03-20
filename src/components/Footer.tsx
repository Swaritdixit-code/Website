import { Link } from 'react-router-dom';
import { Globe, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center">
              <Globe className="text-brand-dark w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">HYD<span className="text-brand-blue">WEB</span></span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Hyderabad's premier web design agency for local businesses. We don't just build websites; we build growth engines for salons, clinics, and more.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/swarit_3211" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-blue transition-colors"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-blue transition-colors"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-blue transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/services" className="hover:text-brand-blue transition-colors">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-brand-blue transition-colors">Portfolio</Link></li>
            <li><Link to="/ai-tools" className="hover:text-brand-blue transition-colors text-brand-blue font-bold">AI Studio (New)</Link></li>
            <li><Link to="/pricing" className="hover:text-brand-blue transition-colors">Pricing Tiers</Link></li>
            <li><Link to="/faq" className="hover:text-brand-blue transition-colors">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3"><Mail size={16} className="text-brand-blue" /> aiautomation0012@gmail.com</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-brand-blue" /> +91 75692 27624</li>
            <li className="text-xs leading-relaxed">Jubilee Hills, Road No. 36,<br />Hyderabad, Telangana 500033</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 AIautomation Agency. Built for the future of business.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
