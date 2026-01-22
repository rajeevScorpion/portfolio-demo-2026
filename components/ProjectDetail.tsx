
import React, { useEffect, useState } from 'react';
import { Project, GalleryItem } from '../types.ts';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (activeLightboxIndex !== null && project.caseStudy) {
        if (e.key === 'ArrowRight') {
          setActiveLightboxIndex((activeLightboxIndex + 1) % project.caseStudy.gallery.length);
        }
        if (e.key === 'ArrowLeft') {
          setActiveLightboxIndex((activeLightboxIndex - 1 + project.caseStudy.gallery.length) % project.caseStudy.gallery.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, project.caseStudy]);

  if (!project.caseStudy) return null;

  const gallery = project.caseStudy.gallery;

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-dark min-h-screen transition-colors duration-500 animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="mb-12 group flex items-center text-xs font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 hover:text-blue-500 transition-colors"
        >
          <i className="fas fa-arrow-left mr-3 transition-transform group-hover:-translate-x-1"></i>
          Back to Portfolio
        </button>

        {/* Hero */}
        <div className="mb-20">
          <span className="text-blue-500 text-xs font-black uppercase tracking-[0.2em] mb-4 block">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 serif text-zinc-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl font-medium">
            {project.caseStudy.overview}
          </p>
        </div>

        {/* Main Banner */}
        <div className="mb-24 rounded-[3rem] overflow-hidden shadow-2xl aspect-video border border-zinc-100 dark:border-white/5">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-6 border-l-2 border-blue-500 pl-4">
              Project Brief
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Role</p>
                <p className="font-bold text-zinc-800 dark:text-white">Lead Designer</p>
              </div>
              <div>
                <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Timeline</p>
                <p className="font-bold text-zinc-800 dark:text-white">4 Weeks</p>
              </div>
              <div>
                <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Tools</p>
                <p className="font-bold text-zinc-800 dark:text-white">Figma, React, Spline</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-16">
            {project.caseStudy.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-bold mb-6 serif text-zinc-900 dark:text-white">{section.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold serif text-zinc-900 dark:text-white mb-8">Process Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {gallery.map((item, idx) => (
              <div key={idx} className="group space-y-4">
                <div 
                  onClick={() => setActiveLightboxIndex(idx)}
                  className="rounded-[2.5rem] overflow-hidden shadow-xl border border-zinc-100 dark:border-white/5 aspect-square md:aspect-[4/3] cursor-pointer grayscale hover:grayscale-0 transition-all duration-700 relative"
                >
                  <img src={item.url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={`Process shot ${idx + 1}`} />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                      <i className="fas fa-expand"></i>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed italic">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {activeLightboxIndex !== null && (
          <div className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:p-12 animate-in fade-in duration-300">
            <button 
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl transition-colors z-[1010]"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="relative w-full max-w-6xl flex flex-col items-center">
              {/* Prev Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxIndex((activeLightboxIndex - 1 + gallery.length) % gallery.length);
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full hidden md:flex w-20 h-20 items-center justify-center text-white/30 hover:text-white transition-all text-4xl"
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="w-full h-full flex flex-col items-center justify-center">
                <img 
                  src={gallery[activeLightboxIndex].url} 
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl" 
                  alt="Process fullscreen"
                />
                <div className="mt-8 text-center max-w-2xl px-6">
                  <p className="text-white text-lg md:text-xl font-medium serif leading-relaxed">
                    {gallery[activeLightboxIndex].description}
                  </p>
                  <div className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-white/30">
                    Step {activeLightboxIndex + 1} of {gallery.length}
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxIndex((activeLightboxIndex + 1) % gallery.length);
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full hidden md:flex w-20 h-20 items-center justify-center text-white/30 hover:text-white transition-all text-4xl"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden space-x-12 mt-8">
              <button 
                onClick={() => setActiveLightboxIndex((activeLightboxIndex - 1 + gallery.length) % gallery.length)}
                className="text-white/50 text-2xl"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={() => setActiveLightboxIndex((activeLightboxIndex + 1) % gallery.length)}
                className="text-white/50 text-2xl"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        )}

        {/* Next Project Hint */}
        <div className="mt-32 pt-20 border-t border-zinc-100 dark:border-white/5 text-center">
          <p className="text-zinc-400 dark:text-zinc-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">Want to see more?</p>
          <button 
            onClick={onBack}
            className="text-4xl md:text-6xl font-black serif text-zinc-900 dark:text-white hover:text-blue-500 transition-colors"
          >
            Explore Other Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
