
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-zinc-50 dark:bg-[#0d0d0d] rounded-[3rem] p-8 md:p-16 lg:p-20 border border-zinc-200 dark:border-white/5 shadow-2xl transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 serif text-zinc-900 dark:text-white leading-[1.1]">
                Let's Create <br/><span className="text-zinc-400 dark:text-zinc-500">Something Great.</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 font-medium max-w-md">
                Always open to collaborating on visionary projects or just a quick chat about design.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-5 group">
                  <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-zinc-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-1">Email Me</p>
                    <p className="font-bold text-zinc-800 dark:text-zinc-100">rajeev.kumar@design.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-5 group">
                  <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm border border-zinc-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-1">Location</p>
                    <p className="font-bold text-zinc-800 dark:text-zinc-100">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-black/20 p-8 md:p-10 rounded-[2.5rem] border border-zinc-100 dark:border-white/5 shadow-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 ml-1">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 ml-1">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 ml-1">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white resize-none placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all duration-300 active:scale-[0.98] shadow-lg ${
                  isSent 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-50 hover:text-white dark:hover:text-blue-600'
                }`}
              >
                {isSent ? (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-check mr-2"></i> Sent Successfully
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
