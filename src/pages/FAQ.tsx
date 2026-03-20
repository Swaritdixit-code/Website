import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "How long does it take to implement AI automation?",
      a: "For an AI Website or a basic AI Chatbot, we usually deliver in 7-10 business days. A full AI Voice Receptionist or complex Business Automation takes about 2-4 weeks depending on the complexity of the workflows."
    },
    {
      q: "Do I have to pay monthly fees for the AI?",
      a: "Our pricing is a one-time design and implementation fee. You only need to pay for the underlying AI API usage (e.g., OpenAI, Gemini) and hosting, which we help you set up directly so you own everything. Most small businesses spend less than ₹1,000 per month on API costs."
    },
    {
      q: "Will the AI Voice Receptionist sound human?",
      a: "Yes! We use advanced text-to-speech technology that sounds incredibly natural. It can handle your business calls, schedule appointments, and answer customer FAQs with human-like precision."
    },
    {
      q: "Can the AI handle my specific business problems?",
      a: "Absolutely. We specialize in custom AI solutions. Whether you need to automate your lead follow-ups, optimize your inventory, or analyze complex data, we build systems tailored to your unique needs."
    },
    {
      q: "Is my data secure with AI automation?",
      a: "Security is our top priority. We implement robust data protection measures and ensure that all AI integrations comply with industry standards. Your data remains yours, and we never use it to train public AI models."
    },
    {
      q: "Do you provide support after the AI is live?",
      a: "We provide 30 days of free technical support after your AI system goes live to ensure everything is running smoothly. We also offer ongoing maintenance plans to keep your AI models updated and optimized."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-brand-blue text-[10px] font-bold mb-6 uppercase tracking-widest">
            <HelpCircle size={14} /> Common Questions
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6">Got <span className="text-gradient">Questions?</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about getting your business online in Hyderabad.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border border-white/5">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-display font-bold text-lg pr-8">{faq.q}</span>
                <div className="shrink-0 text-brand-blue">
                  {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 glass p-10 rounded-3xl text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-8">We're happy to chat on WhatsApp or jump on a quick call to discuss your specific needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/917569227624" className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Chat on WhatsApp
            </a>
            <button className="glass px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
              Request a Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
