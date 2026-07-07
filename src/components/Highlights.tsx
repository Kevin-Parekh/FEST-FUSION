import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Users, CalendarDays, Trophy } from 'lucide-react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (isInView && node) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          node.textContent = Math.floor(v).toLocaleString() + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={nodeRef} className="text-5xl md:text-7xl font-display font-bold text-white">0{suffix}</span>;
}

export function Highlights() {
  const stats = [
    { id: 1, label: 'Past Footfall', value: 5000, suffix: '+', icon: Users, color: 'text-purple-400' },
    { id: 2, label: 'Tech Events', value: 45, suffix: '+', icon: CalendarDays, color: 'text-orange-400' },
    { id: 3, label: 'Prize Pool', value: 100, suffix: 'k', icon: Trophy, color: 'text-pink-400' },
  ];

  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Fest Legacy</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-lg">Numbers that speak for themselves from our previous iterations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              key={stat.id} 
              className="glass rounded-[2rem] p-8 flex flex-col items-center text-center group hover:bg-white/10 transition-colors border-t border-white/20"
            >
              <div className={`p-5 rounded-2xl bg-white/5 mb-6 ${stat.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/10`}>
                <stat.icon size={36} strokeWidth={1.5} />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm uppercase tracking-[0.2em] text-purple-200/60 mt-4 font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
