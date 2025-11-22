import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ThemeToggle } from './components/ThemeToggle';
import { CryptoOracle } from './components/CryptoOracle';
import { Trophy, Zap, Activity } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : false;
  });

  const [jackpot, setJackpot] = useState(12405932);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  // Simulate Jackpot Increment
  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot(prev => prev + Math.floor(Math.random() * 50));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-slate-50 dark:bg-[#0a0a12] font-sans">
        
        {/* Background Pattern */}
        <div className="fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20 dark:opacity-30">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/30 rounded-full blur-[120px] mix-blend-overlay"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/30 rounded-full blur-[120px] mix-blend-overlay"></div>
        </div>

        {/* Top Ticker (New) */}
        <div className="bg-slate-900 text-white text-[10px] md:text-xs py-1 overflow-hidden z-50 border-b border-white/10">
           <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite] flex gap-8">
              <span className="text-green-400 flex items-center gap-1"><Zap size={10}/> User392 just claimed 0.0003 BTC</span>
              <span className="text-blue-400 flex items-center gap-1"><Activity size={10}/> Network Hashrate: 592 EH/s</span>
              <span className="text-pink-400 flex items-center gap-1"><Trophy size={10}/> New Faucet Added: DogeStation</span>
              <span className="text-yellow-400 flex items-center gap-1"><Zap size={10}/> BTC Price: $94,320 (Simulated)</span>
              <span className="text-green-400 flex items-center gap-1"><Zap size={10}/> User88 just withdrew $50 USDT</span>
              <span className="text-purple-400 flex items-center gap-1"><Activity size={10}/> LootLoop v2.0 Live</span>
              {/* Duplicate for seamless loop */}
              <span className="text-green-400 flex items-center gap-1"><Zap size={10}/> User392 just claimed 0.0003 BTC</span>
              <span className="text-blue-400 flex items-center gap-1"><Activity size={10}/> Network Hashrate: 592 EH/s</span>
              <span className="text-pink-400 flex items-center gap-1"><Trophy size={10}/> New Faucet Added: DogeStation</span>
           </div>
        </div>

        {/* Compact Navigation */}
        <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0a0a12]/80 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg group cursor-pointer">
                 <div className="absolute inset-0 bg-gradient-to-br from-neon-pink to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <span className="text-white dark:text-black font-black text-lg relative z-10">L</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-400 leading-none">
                  LOOT<span className="text-neon-pink">LOOP</span>
                </h1>
                <div className="hidden md:flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                  TOTAL LOOT: <span className="text-yellow-500 font-bold">${jackpot.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3">
              <CryptoOracle />
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
              <ThemeToggle isDark={darkMode} toggle={() => setDarkMode(!darkMode)} />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-12 text-center text-slate-500 dark:text-slate-500 text-xs md:text-sm relative z-10 border-t border-slate-200 dark:border-slate-800/50 bg-slate-100 dark:bg-[#0d0d16]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
               <div>
                 <h4 className="font-bold text-slate-900 dark:text-white mb-2">ABOUT</h4>
                 <p>The gamified index for crypto earners. We track the best faucets, nodes, and tasks so you don't have to.</p>
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 dark:text-white mb-2">DISCLAIMER</h4>
                 <p>Links may contain referral codes. Do your own research. Not financial advice.</p>
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 dark:text-white mb-2">COMMUNITY</h4>
                 <p>Join the hunt. Keep grinding. WAGMI.</p>
               </div>
            </div>
            <p>© 2024 LootLoop Arcade. Built for the players.</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;