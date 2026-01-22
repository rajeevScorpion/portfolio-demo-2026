
import React from 'react';

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isDarkMode, toggleTheme }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
          RAJEEV<span className="text-blue-500">.</span>KUMAR
        </a>
        
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-sm font-semibold transition-colors hover:text-blue-500 ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-blue-500' 
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:text-blue-500 transition-all"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </ul>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300"
          >
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-5 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-full transition-transform active:scale-95 hover:opacity-80"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
