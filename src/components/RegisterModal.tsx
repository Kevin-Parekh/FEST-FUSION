import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function RegisterModal({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
          >
            <div className="bg-[#120524]/95 backdrop-blur-xl rounded-[2rem] p-8 relative overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/50">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />
              
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white/40 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30"
                  >
                    <Sparkles className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-3xl font-display font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                    You're In!
                  </h3>
                  <p className="text-purple-200/80 text-lg">See you at Fest Fusion.</p>
                </motion.div>
              ) : (
                <div className="py-2">
                  <h2 className="text-3xl font-display font-bold mb-3">Join the Fusion</h2>
                  <p className="text-purple-200/70 mb-8 text-sm">Secure your spot at the biggest tech fest of the year.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-purple-200/60 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-purple-200/60 mb-2">College Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                        placeholder="University of Technology"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-purple-200/60 mb-2">Primary Event</label>
                      <div className="relative">
                        <select 
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all appearance-none"
                        >
                          <option value="" disabled selected className="text-white/20">Select an event</option>
                          <option value="hackathon" className="bg-[#120524]">Hackathon 24H</option>
                          <option value="robowars" className="bg-[#120524]">RoboWars</option>
                          <option value="ai-summit" className="bg-[#120524]">AI Summit</option>
                          <option value="esports" className="bg-[#120524]">E-Sports Arena</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white font-bold py-4 rounded-xl mt-8 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-500/25 border border-white/10"
                    >
                      Complete Registration
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
