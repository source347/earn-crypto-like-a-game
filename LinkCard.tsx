import React, { useState } from 'react';
import { LinkItem } from '../types';
import { ExternalLink, Sparkles } from 'lucide-react';

interface Props {
  item: LinkItem;
}

export const LinkCard: React.FC<Props> = ({ item }) => {
  const [clicked, setClicked] = useState(false);
  const [xpFloat, setXpFloat] = useState(false);

  const getFavicon = (url: string) => {
    try {
      const hostname = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
    } catch (e) {
      return '';
    }
  };

  const handleClick = () => {
    setClicked(true);
    setXpFloat(true);
    setTimeout(() => setClicked(false), 200);
    setTimeout(() => setXpFloat(false), 800);
  };

  return (
    <div className="relative group h-full">
      {/* Floating XP Text Animation - Smaller & Faster */}
      {xpFloat && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-400 font-black text-xs animate-bounce-fast z-50 pointer-events-none drop-shadow-sm select-none">
          +XP
        </div>
      )}

      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`
          relative flex flex-col h-full p-2 bg-white dark:bg-card-dark 
          rounded-md border border-slate-200 dark:border-slate-700/60
          hover:border-neon-pink dark:hover:border-neon-blue
          shadow-sm hover:shadow-neon-pink/10 hover:shadow-md
          transition-all duration-150 overflow-hidden
          ${clicked ? 'scale-95 opacity-80' : 'hover:-translate-y-0.5'}
        `}
      >
        {/* Hot Badge - Mini */}
        {item.isHot && (
          <div className="absolute -right-4 top-2 rotate-45 bg-red-600 text-white text-[8px] font-bold px-4 py-0.5 shadow-sm z-20">
            HOT
          </div>
        )}

        {/* Header: Icon + Title */}
        <div className="flex items-center gap-2 mb-1.5">
          <div className={`
            w-8 h-8 min-w-[1.75rem] rounded bg-slate-50 dark:bg-slate-800 
            flex items-center justify-center border border-slate-100 dark:border-slate-700
            relative overflow-hidden shrink-0
          `}>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${item.color}`} />
            <img 
              src={getFavicon(item.url)} 
              alt="" 
              className="w-8 h-8 object-contain z-10" 
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center -z-10 font-bold text-base text-slate-300">
               {item.title.charAt(0)}
            </div>
          </div>
          
          <div className="flex-1 min-w-0 overflow-hidden">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 truncate text-3xl leading-none group-hover:text-purple-600 dark:group-hover:text-neon-blue transition-colors">
              {item.title}
            </h3>
            <div className="flex gap-1 mt-1 overflow-hidden">
              {item.tags.slice(0, 1).map(tag => (
                <span key={tag} className="text-[8px] px-1 py-0 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-sm whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 flex-grow leading-tight mb-2">
          {item.description}
        </p>

        {/* Action Footer - Very Compact */}
        <div className="mt-auto flex items-center justify-between pt-1.5 border-t border-slate-100 dark:border-slate-800/50">
          <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
            <Sparkles size={8} /> LOOT
          </span>
          <ExternalLink size={16} className="text-slate-300 group-hover:text-purple-500 transition-colors" />
        </div>

        {/* Hover Shine Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_0.8s_infinite]" />
        </div>
      </a>
    </div>
  );
};
