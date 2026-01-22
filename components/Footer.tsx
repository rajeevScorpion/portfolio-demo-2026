
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Rajeev Kumar. All rights reserved.
        </div>
        
        <div className="flex space-x-12">
          <a href="#work" className="text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-white transition-colors">Projects</a>
          <a href="#about" className="text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-white transition-colors">Story</a>
          <a href="#skills" className="text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-white transition-colors">Toolkit</a>
        </div>

        <div className="text-xs text-zinc-600 italic">
          Built with React, Tailwind & Gemini AI
        </div>
      </div>
    </footer>
  );
};

export default Footer;
