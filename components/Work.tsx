
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Typographic Renaissance',
    category: 'Typography',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
    description: 'A study on Swiss-style typography in modern web interfaces.'
  },
  {
    id: 2,
    title: 'NeuroFit App',
    category: 'UX/UI Design',
    imageUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
    description: 'Mental wellness tracker with focus on accessibility and neurodiversity.'
  },
  {
    id: 3,
    title: 'Abstract Realism',
    category: '3D Design',
    imageUrl: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop',
    description: 'Collection of 3D procedural textures and environments created in Spline.'
  },
  {
    id: 4,
    title: 'Portfolio Engine',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    description: 'React-based portfolio framework optimized for performance and SEO.'
  },
  {
    id: 5,
    title: 'Brand Identity',
    category: 'Communication Design',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    description: 'Visual identity for a sustainable fashion tech startup.'
  },
  {
    id: 6,
    title: 'Cyberpunk Vision',
    category: '3D & Motion',
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop',
    description: 'Motion graphic exploration of neon-noir aesthetic.'
  }
];

const Work: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 serif text-zinc-900 dark:text-white">Selected Work</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-md font-medium">
            A collection of projects where logic meets aesthetics.
          </p>
        </div>
        <div className="mt-8 md:mt-0 flex space-x-4">
          <button className="text-sm font-bold border-b-2 border-blue-500 pb-1 text-zinc-900 dark:text-white">All Projects</button>
          <button className="text-sm font-bold text-zinc-400 dark:text-zinc-500 pb-1 border-b-2 border-transparent hover:text-zinc-900 dark:hover:text-white transition-colors">Design</button>
          <button className="text-sm font-bold text-zinc-400 dark:text-zinc-500 pb-1 border-b-2 border-transparent hover:text-zinc-900 dark:hover:text-white transition-colors">Dev</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-[#1a1a1a] aspect-[4/5] cursor-pointer shadow-xl border border-zinc-100 dark:border-white/5">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 dark:opacity-70 dark:group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end text-white">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-200 text-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
