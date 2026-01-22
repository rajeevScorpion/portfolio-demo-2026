
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-white dark:bg-dark">
      {/* Background patterns */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <span className="inline-block py-1 px-3 mb-6 border border-zinc-200 dark:border-white/10 rounded-full text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
          Communication Design Student
        </span>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] serif text-zinc-900 dark:text-white">
          Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Digital</span> Experiences.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Hi, I'm Rajeev Kumar. I blend typography, UX logic, and 3D visual language 
          to build interfaces that feel human.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#work" 
            onClick={handleScrollToWork}
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-full overflow-hidden transition-all hover:pr-12 shadow-lg shadow-blue-500/20"
          >
            <span className="relative z-10 font-bold">View Portfolio</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-white rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
          >
            My Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 dark:opacity-40">
        <i className="fas fa-chevron-down text-2xl text-zinc-900 dark:text-white"></i>
      </div>
    </div>
  );
};

export default Hero;
