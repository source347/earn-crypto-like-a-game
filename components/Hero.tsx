import React from 'react';
import { Star, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-6 pb-4 px-4 text-center overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a12]">
       <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
         
         <div className="flex items-center gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold uppercase tracking-wide animate-pulse-neon border border-yellow-500/20">
              <Star size={10} fill="currentColor" />
              Season 4: Multipliers Active
            </div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wide border border-green-500/20">
              <Zap size={10} fill="currentColor" />
              +25% XP Weekend
            </div>
         </div>
         
         <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-2">
           EARN CRYPTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-neon-blue dark:to-neon-pink">LIKE A GAME</span>
         </h1>

         <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed font-medium">
           The ultimate directory of paying faucets, PTCs, and task walls. 
           Filtered for quality. Optimized for gains.
         </p>
       </div>
    </div>
  );
};