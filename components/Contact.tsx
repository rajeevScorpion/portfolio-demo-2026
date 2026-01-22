
import React, { useState } from 'react';

type FormStatus = 'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  // Formspree endpoint provided by the user
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqqgaav";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormState({ name: '', email: '', message: '' });
        // Auto-reset the success state after 8 seconds
        setTimeout(() => setStatus('IDLE'), 8000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('ERROR');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-zinc-50 dark:bg-[#0d0d0d] rounded-[3rem] p-8 md:p-16 lg:p-20 border border-zinc-200 dark:border-white/5 shadow-2xl transition-colors duration-300 overflow-hidden relative">
        
        {/* Success Overlay */}
        {status === 'SUCCESS' && (
          <div className="absolute inset-0 z-20 bg-emerald-500/95 backdrop-blur-sm flex flex-col items-center justify-center text-white text-center p-6 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <i className="fas fa-check text-4xl"></i>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold serif mb-4">Message Sent!</h3>
            <p className="text-xl max-w-md opacity-90 font-medium mb-8">
              Thank you for reaching out. A confirmation will be sent to your email, and Rajeev will get back to you shortly.
            </p>
            <button 
              onClick={() => setStatus('IDLE')}
              className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-full hover:shadow-xl transition-all active:scale-95"
            >
              Back to Form
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 serif text-zinc-900 dark:text-white leading-[1.1]">
                Let's Create <br/><span className="text-zinc-400 dark:text-zinc-500">Something Great.</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 font-medium max-w-md">
                Always open to collaborating on visionary projects. Drop a line, and let's start a conversation.
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
                    name="name"
                    required
                    disabled={status === 'SUBMITTING'}
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    disabled={status === 'SUBMITTING'}
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                  <p className="text-[9px] text-zinc-400 italic ml-1">* Confirmation will be sent to this address.</p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 ml-1">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  disabled={status === 'SUBMITTING'}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white resize-none placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium disabled:opacity-50"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {status === 'ERROR' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold animate-pulse">
                  <i className="fas fa-exclamation-circle mr-2"></i> {errorMessage}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={status === 'SUBMITTING'}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all duration-300 active:scale-[0.98] shadow-lg flex items-center justify-center ${
                  status === 'SUBMITTING' 
                    ? 'bg-zinc-200 dark:bg-white/10 text-zinc-400 cursor-not-allowed' 
                    : 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-50 hover:text-white dark:hover:text-blue-600'
                }`}
              >
                {status === 'SUBMITTING' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
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
