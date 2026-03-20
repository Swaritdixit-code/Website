import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, Zap, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  businessType: string;
  email: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    businessType: 'Salon / Spa',
    email: '',
    budget: '₹5,000 - ₹10,000',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: '',
      businessType: 'Salon / Spa',
      email: '',
      budget: '₹5,000 - ₹10,000',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6">Let's <span className="text-gradient">Connect.</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to grow your business? Fill out the form below or reach out directly via WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-display font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Us</div>
                    <div className="text-lg font-medium">aiautomation0012@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Call Us</div>
                    <div className="text-lg font-medium">+91 75692 27624</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Visit Us</div>
                    <div className="text-lg font-medium">Jubilee Hills, Hyderabad</div>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/917569227624" 
              className="block glass p-8 rounded-3xl border-l-4 border-l-[#25D366] hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Instant Chat</div>
                    <div className="text-lg font-bold">Message on WhatsApp</div>
                  </div>
                </div>
                <Zap className="text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>

            {/* Map Placeholder */}
            <div className="glass rounded-3xl h-64 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/40 z-10">
                <div className="glass px-4 py-2 rounded-full text-xs font-bold">Jubilee Hills, Road No. 36</div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 md:p-12 rounded-3xl relative">
            <h3 className="text-2xl font-display font-bold mb-8 text-gradient">Send a Message</h3>
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-brand-blue font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Arjun Reddy" 
                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Business Type</label>
                      <select 
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-gray-400"
                      >
                        <option>Salon / Spa</option>
                        <option>Clinic / Doctor</option>
                        <option>Restaurant / Cafe</option>
                        <option>Gym / Fitness</option>
                        <option>Contractor / Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="arjun@example.com" 
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Estimated Budget (INR)</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-gray-400"
                    >
                      <option>₹5,000 - ₹10,000</option>
                      <option>₹10,000 - ₹20,000</option>
                      <option>₹20,000+</option>
                      <option>Custom Quote</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Tell us about your project..." 
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</p>}
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue text-brand-dark py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Processing... <Loader2 size={18} className="animate-spin" /></>
                    ) : (
                      <>Send Inquiry <Send size={18} /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
