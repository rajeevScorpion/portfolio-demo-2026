
import React from 'react';

const skills = [
  { name: 'Typography', level: 90, icon: 'fa-font' },
  { name: 'UX/UI Design', level: 95, icon: 'fa-vector-square' },
  { name: '3D Modeling', level: 85, icon: 'fa-cube' },
  { name: 'Web Development', level: 80, icon: 'fa-code' },
  { name: 'Photography', level: 75, icon: 'fa-camera' },
  { name: 'Blogging', level: 70, icon: 'fa-pen-nib' }
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 serif text-zinc-900 dark:text-white">Crafting with <br/>Precision</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed font-medium">
            My toolkit is evolving. I focus on technologies and design paradigms that push the boundaries 
            of what's possible in the browser.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/5 shadow-sm">
              <div className="text-blue-500 text-2xl mb-4"><i className="fab fa-react"></i></div>
              <h4 className="font-bold mb-1 text-zinc-900 dark:text-white">React & TS</h4>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Frontend Logic</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/5 shadow-sm">
              <div className="text-purple-500 text-2xl mb-4"><i className="fas fa-bezier-curve"></i></div>
              <h4 className="font-bold mb-1 text-zinc-900 dark:text-white">Figma</h4>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Prototyping</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/5 shadow-sm">
              <div className="text-pink-500 text-2xl mb-4"><i className="fas fa-cube"></i></div>
              <h4 className="font-bold mb-1 text-zinc-900 dark:text-white">Spline/Blender</h4>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">3D Assets</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/5 shadow-sm">
              <div className="text-orange-500 text-2xl mb-4"><i className="fas fa-wind"></i></div>
              <h4 className="font-bold mb-1 text-zinc-900 dark:text-white">Tailwind</h4>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Styling System</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-400 group-hover:text-blue-500 transition-colors">
                    <i className={`fas ${skill.icon}`}></i>
                  </div>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                </div>
                <span className="text-xs font-black text-zinc-400 dark:text-zinc-500 tracking-widest">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-zinc-100 dark:bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-1000 ease-out rounded-full"
                  style={{ width: `${skill.level}%`, backgroundSize: '200% 100%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
