import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Video, Image as ImageIcon, Zap, ArrowRight, Wand2 } from 'lucide-react';
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export default function AIToolsPage() {
  const [businessType, setBusinessType] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generateConcept = async () => {
    if (!businessType) return;
    setIsGenerating(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a creative website concept for a ${businessType} business in Hyderabad. 
        Include:
        1. A catchy headline.
        2. A brief 2-sentence description of the vibe.
        3. Three key features the website should have.
        Keep it professional and modern.`,
      });
      setResult(response.text || "Failed to generate concept. Please try again.");
    } catch (error) {
      console.error(error);
      setResult("Error generating concept. Make sure your API key is configured.");
    } finally {
      setIsGenerating(false);
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> AI-Powered Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6">Next-Gen <span className="text-gradient">AI Tools.</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don't just build websites; we leverage cutting-edge AI to generate content, assets, and strategies that put you ahead of the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* AI Video Gen Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Video size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center text-brand-blue mb-8">
                <Video size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">AI Video Generation</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We use advanced AI to create high-quality, human-like videos of your business processes, testimonials, or product showcases without the need for expensive film crews.
              </p>
              <ul className="space-y-4 mb-10">
                {['Realistic Human Avatars', 'Automated Scriptwriting', 'Multi-language Dubbing'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <Zap size={16} className="text-brand-blue" /> {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* AI Photo Gen Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ImageIcon size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/20 flex items-center justify-center text-brand-orange mb-8">
                <ImageIcon size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">AI Photo Generation</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Need professional stock photos that don't look like stock photos? Our AI generates unique, high-resolution imagery tailored specifically to your brand's aesthetic.
              </p>
              <ul className="space-y-4 mb-10">
                {['Custom Brand Assets', 'Product Mockups', 'Interior/Exterior Visuals'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <Zap size={16} className="text-brand-orange" /> {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-brand-orange font-bold hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Interactive Tool Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Try Our Concept Generator</h2>
            <p className="text-gray-400">Enter your business type to see how AI can kickstart your website design.</p>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input 
                type="text" 
                placeholder="e.g. Luxury Spa, Modern Cafe, Dental Clinic..."
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors"
              />
              <button 
                onClick={generateConcept}
                disabled={isGenerating || !businessType}
                className="bg-brand-blue text-brand-dark px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
              >
                {isGenerating ? 'Generating...' : <><Wand2 size={20} /> Generate Concept</>}
              </button>
            </div>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 whitespace-pre-wrap text-gray-300 leading-relaxed"
                >
                  {result}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
