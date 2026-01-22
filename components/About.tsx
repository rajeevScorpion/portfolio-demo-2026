
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="md:col-span-5 aspect-square relative rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
            alt="Rajeev Kumar"
            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 border-[15px] border-black/10 dark:border-white/5 pointer-events-none rounded-[3rem]"></div>
        </div>
        
        <div className="md:col-span-7">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 serif text-zinc-900 dark:text-white leading-[1.1]">Beyond <br/><span className="text-zinc-400 dark:text-zinc-500">the Pixels.</span></h2>
          <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed font-medium">
            I'm Rajeev, a Communication Design student who believes that good design is 
            invisible until it fails.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 mb-10 font-medium leading-relaxed italic">
            When I'm not pushing nodes in Figma or debugging React hooks, you'll find me 
            exploring the city with my camera, capturing the geometric rhythm of 
            architecture. I also write a tech blog where I simplify complex design 
            trends for the creative community.
          </p>
          
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-zinc-900 dark:text-white">3+</span>
              <span className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mt-1">Years Exp</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-zinc-900 dark:text-white">40+</span>
              <span className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mt-1">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-zinc-900 dark:text-white">12+</span>
              <span className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mt-1">Awards</span>
            </div>
          </div>
          
          <div className="mt-12 flex space-x-8">
            <a href="#" className="text-2xl text-zinc-400 hover:text-blue-500 dark:text-zinc-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-2xl text-zinc-400 hover:text-pink-500 dark:text-zinc-600 dark:hover:text-pink-400 transition-all hover:-translate-y-1"><i className="fab fa-dribbble"></i></a>
            <a href="#" className="text-2xl text-zinc-400 hover:text-blue-700 dark:text-zinc-600 dark:hover:text-blue-500 transition-all hover:-translate-y-1"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-2xl text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-white transition-all hover:-translate-y-1"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
