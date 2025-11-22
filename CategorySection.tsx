import React from 'react';
import { CategoryMeta, LinkItem } from '../types';
import { LinkCard } from './LinkCard';

interface Props {
  category: CategoryMeta;
  links: LinkItem[];
}

export const CategorySection: React.FC<Props> = ({ category, links }) => {
  if (links.length === 0) return null;

  return (
    <section className="py-2 relative">
      {/* Compact Category Header */}
      <div className="flex items-center gap-2 mb-2 px-2 border-l-4 border-transparent hover:border-l-4 hover:border-neon-pink transition-all pl-2 group cursor-default">
        <div className={`
          w-6 h-6 md:w-8 md:h-8 rounded-md bg-gradient-to-br ${category.gradient} 
          flex items-center justify-center text-sm md:text-base shadow-sm group-hover:scale-110 transition-transform
        `}>
          {category.icon}
        </div>
        <div className="flex items-baseline gap-2 flex-wrap">
          <h2 className="text-base md:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
            {category.label}
          </h2>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
            {links.length}
          </span>
        </div>
        <div className="flex-grow h-px bg-slate-100 dark:bg-slate-800/50 ml-2"></div>
      </div>

      {/* Dense Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {links.map(link => (
          <LinkCard key={link.id} item={link} />
        ))}
      </div>
    </section>
  );
};