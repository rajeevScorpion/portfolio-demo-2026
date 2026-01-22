import React, { useState } from 'react';
import { Project } from '../types.ts';

const projects: Project[] = [
  {
    id: 1,
    title: 'Typographic Renaissance',
    category: 'Typography',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
    description: 'A study on Swiss-style typography in modern web interfaces.',
    caseStudy: {
      overview: 'This project explores the revival of classic Swiss design principles in the context of contemporary user experience. Focusing on grid systems, sans-serif typefaces, and white space.',
      sections: [
        { title: 'The Concept', content: "Minimalism isn't just about removing elements; it's about the precision of what remains. We used Akzidenz-Grotesk for primary headings to maintain a historical link." },
        { title: 'The Grid', content: 'A rigorous 12-column grid system was implemented to ensure mathematical harmony across all screen sizes.' }
      ],
      gallery: [
        { url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop', description: 'Initial typeface explorations focusing on legibility and geometric balance.' },
        { url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', description: 'Applying the grid system to complex hierarchical layouts.' }
      ]
    }
  },
  {
    id: 2,
    title: 'NeuroFit App',
    category: 'UX/UI',
    imageUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
    description: 'Mental wellness tracker with focus on accessibility and neurodiversity.',
    caseStudy: {
      overview: 'NeuroFit is a high-accessibility health application designed specifically for neurodivergent users who find standard interfaces overwhelming.',
      sections: [
        { title: 'User Research', content: 'We conducted interviews with 20 neurodivergent individuals to identify pain points in current wellness apps. Visual noise was the #1 deterrent.' },
        { title: 'Solution', content: 'Implementing high-contrast but low-saturation color palettes and high-legibility typography like Atkinson Hyperlegible.' }
      ],
      gallery: [
        { url: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop', description: 'The final high-fidelity dashboard showcasing low-stimulation visual design.' },
        { url: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop', description: 'Early stage wireframing focused on information architecture.' }
      ]
    }
  },
  {
    id: 3,
    title: 'Abstract Realism',
    category: '3D',
    imageUrl: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop',
    description: 'Collection of 3D procedural textures and environments created in Spline.',
    caseStudy: {
      overview: 'An exploration of how 3D elements can be integrated into 2D web interfaces to create depth without sacrificing performance.',
      sections: [
        { title: 'Material Design', content: 'Using complex shaders in Spline to simulate real-world physics on abstract objects.' }
      ],
      gallery: [
        { url: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop', description: 'Light and shadow studies on procedural glass materials.' }
      ]
    }
  },
  {
    id: 4,
    title: 'Portfolio Engine',
    category: 'Development',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    description: 'React-based portfolio framework optimized for performance and SEO.',
    caseStudy: {
      overview: 'A performance-first static site generator built on top of React and Vite.',
      sections: [
        { title: 'Performance', content: 'Achieved 100/100 Lighthouse scores through aggressive image optimization and code splitting.' }
      ],
      gallery: [
        { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', description: 'Development environment setup focusing on fast refresh cycles.' }
      ]
    }
  }
];

interface WorkProps {
  onSelectProject: (p: Project) => void;
}

const Work: React.FC<WorkProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Typography', 'UX/UI', '3D', 'Development'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 serif text-zinc-900 dark:text-white">Selected Work</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-md font-medium">
            A collection of projects where logic meets aesthetics.
          </p>
        </div>
        <div className="mt-8 md:mt-0 flex flex-wrap gap-4">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-bold pb-1 border-b-2 transition-all ${
                filter === cat 
                  ? 'border-blue-500 text-zinc-900 dark:text-white' 
                  : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => onSelectProject(project)}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#1a1a1a] aspect-[16/10] cursor-pointer shadow-xl border border-zinc-100 dark:border-white/5"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 dark:opacity-70 dark:group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end text-white">
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-3">
                {project.category}
              </span>
              <h3 className="text-3xl font-bold mb-3 serif">{project.title}</h3>
              <p className="text-zinc-300 text-sm max-w-sm line-clamp-2">
                {project.description}
              </p>
              <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                View Case Study <i className="fas fa-arrow-right ml-2 text-[10px]"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-zinc-400 italic">
          No projects found in this category.
        </div>
      )}
    </div>
  );
};

export default Work;
