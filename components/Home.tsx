import React, { useState, useMemo } from 'react';
import { Hero } from './Hero';
import { CategorySection } from './CategorySection';
import { CATEGORIES, LINKS } from '../constants';
import { Search, Filter, Flame, ArrowDownAZ, Dice5, X } from 'lucide-react';
import { CategoryType } from '../types';

type SortType = 'default' | 'hot' | 'alpha';

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortType>('default');

  // Filter and Sort Logic
  const processedData = useMemo(() => {
    let filtered = LINKS;

    // 1. Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(link => 
        link.title.toLowerCase().includes(q) ||
        link.description.toLowerCase().includes(q) ||
        link.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // 2. Sort (We sort within categories later, but if we want global sort effect inside cats)
    // Actually, we just prepare the helper function here or pre-sort.
    // Since we render by category, we pass the sorting preference down or sort strictly here.
    return filtered;
  }, [searchQuery]);

  const getSortedLinks = (links: typeof LINKS) => {
    if (sortBy === 'alpha') {
      return [...links].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === 'hot') {
      return [...links].sort((a, b) => (b.isHot === a.isHot ? 0 : b.isHot ? 1 : -1));
    }
    return links; // Default constant order
  };

  const handleLucky = () => {
    const randomLink = LINKS[Math.floor(Math.random() * LINKS.length)];
    window.open(randomLink.url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-20">
      <Hero />

      {/* Interactive Control Bar */}
      <div className="sticky top-16 z-30 bg-slate-50/95 dark:bg-[#0a0a12]/95 backdrop-blur-sm py-3 mb-2 border-b border-slate-200 dark:border-slate-800/50">
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-between max-w-5xl mx-auto px-2">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-96 group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={14} className="text-slate-400 group-focus-within:text-neon-pink transition-colors" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for loot (e.g. 'bitcoin', 'game', 'node')..." 
              className="w-full pl-9 pr-8 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:border-neon-pink dark:focus:border-neon-blue focus:ring-1 focus:ring-neon-pink dark:focus:ring-neon-blue transition-all shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-2 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            
            {/* Sort Toggles */}
            <div className="flex bg-white dark:bg-slate-900 rounded-lg p-1 border border-slate-200 dark:border-slate-700 shrink-0">
              <button 
                onClick={() => setSortBy('default')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 ${sortBy === 'default' ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              >
                <Filter size={12} /> Default
              </button>
              <button 
                onClick={() => setSortBy('hot')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 ${sortBy === 'hot' ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-orange-500'}`}
              >
                <Flame size={12} /> Hot
              </button>
              <button 
                onClick={() => setSortBy('alpha')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 ${sortBy === 'alpha' ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              >
                <ArrowDownAZ size={12} /> A-Z
              </button>
            </div>

            {/* Lucky Button */}
            <button 
              onClick={handleLucky}
              className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:shadow-neon-pink/50 hover:scale-105 transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap"
            >
              <Dice5 size={14} className="animate-spin-slow" /> I'm Feeling Lucky
            </button>

          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {CATEGORIES.map(category => {
          // Filter links for this category from the global filtered list
          const categoryLinks = processedData.filter(l => l.category === category.id);
          
          if(categoryLinks.length === 0) return null;

          // Apply sort
          const sortedCategoryLinks = getSortedLinks(categoryLinks);
          
          return (
            <div key={category.id} id={category.id}>
              <CategorySection category={category} links={sortedCategoryLinks} />
            </div>
          );
        })}
        
        {/* Empty State */}
        {processedData.length === 0 && (
            <div className="text-center py-20">
                <div className="text-6xl mb-4">🕸️</div>
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">No loot found</h3>
                <p className="text-slate-500">Try a different search term, explorer.</p>
                <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-neon-pink hover:underline"
                >
                    Clear Search
                </button>
            </div>
        )}
      </div>
    </div>
  );
};