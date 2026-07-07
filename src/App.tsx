import { useState } from 'react';
import { Countdown } from './components/Countdown';
import { Highlights } from './components/Highlights';
import { RegisterModal } from './components/RegisterModal';
import { motion } from 'motion/react';
import { MapPin, Clock, Calendar, Facebook, Twitter, Instagram, Sparkles, ArrowRight } from 'lucide-react';

const events = [
  { id: 1, name: 'Hackathon 24H', time: '10:00 AM', venue: 'Main Auditorium', date: 'Oct 15' },
  { id: 2, name: 'RoboWars', time: '02:00 PM', venue: 'Tech Arena', date: 'Oct 15' },
  { id: 3, name: 'AI Summit', time: '11:00 AM', venue: 'Seminar Hall B', date: 'Oct 16' },
  { id: 4, name: 'E-Sports Arena', time: '04:00 PM', venue: 'Gaming Lounge', date: 'Oct 16' },
  { id: 5, name: 'Startup Pitch', time: '01:00 PM', venue: 'Innovation Hub', date: 'Oct 17' },
  { id: 6, name: 'Closing Ceremony', time: '06:00 PM', venue: 'Open Air Theatre', date: 'Oct 17' },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px]" />
      </div>

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center py-20 px-6 gradient-hero overflow-hidden z-10 border-b border-white/5">
        {/* Overlay grid pattern for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 text-orange-300 text-sm font-semibold tracking-wide uppercase shadow-2xl shadow-orange-500/10 border-white/20"
          >
            <Sparkles size={16} />
            <span>The Ultimate Tech Convergence</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter mb-6 leading-none">
            FEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">FUSION</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-purple-100/80 font-medium mb-12 max-w-2xl">
            Where Ideas Come Alive.
          </p>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-black/20 font-display rounded-full overflow-hidden shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 active:scale-95 border border-white/10 backdrop-blur-md"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-purple-600 transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
            <span className="relative z-10">Register Now</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <div className="mt-16 w-full">
            <Countdown />
          </div>
        </motion.div>
      </section>

      {/* Schedule Section */}
      <section className="py-32 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Event Schedule</h2>
            <p className="text-purple-200/60 text-lg max-w-2xl mx-auto font-medium">Plan your days with our action-packed itinerary of hackathons, workshops, and competitions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 cursor-default border-t border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-bold uppercase tracking-widest shadow-inner">
                    <Calendar size={14} />
                    {event.date}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-orange-400 group-hover:scale-110 group-hover:border-orange-500/30 transition-all">
                    <span className="font-display font-bold text-lg">0{event.id}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-display font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all relative z-10">
                  {event.name}
                </h3>
                
                <div className="space-y-4 text-purple-200/70 font-medium relative z-10">
                  <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl">
                    <Clock size={18} className="text-purple-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl">
                    <MapPin size={18} className="text-orange-400" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Highlights />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md pt-20 pb-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-display font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
            Fest Fusion
          </h2>
          <p className="text-purple-200/60 max-w-md mb-10 font-medium text-lg">
            Thank you for making our past events incredible. We can't wait to see what you build this year.
          </p>
          
          <div className="flex gap-6 mb-16">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-orange-500/20 hover:border-orange-500/50 transition-all hover:-translate-y-1">
                <Icon size={24} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />
          
          <p className="text-white/30 text-sm font-medium tracking-wide uppercase">
            © {new Date().getFullYear()} Fest Fusion. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
