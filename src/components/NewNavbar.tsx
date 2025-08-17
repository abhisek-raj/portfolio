import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NewNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navButtons = [
    { label: 'Technical Skills', href: '#technical-skills' },
    { label: 'INTERN', href: '#experience' },
    { label: 'Deployed', href: '#deployed' },
    { label: 'Projects', href: '#projects' },
    { label: 'MY ML Models', href: '#ml-model' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex justify-center items-center transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}>
          {/* Navigation Buttons - Centered */}
          <nav className="flex items-center gap-6">
            {navButtons.map((button, index) => (
              <motion.div
                key={button.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <a
                  href={button.href}
                  className={`nav-link font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                    button.label === 'Deployed'
                      ? 'bg-gradient-to-r from-black/20 to-gray-800/20 border border-black/40 text-black hover:bg-gradient-to-r hover:from-black/30 hover:to-gray-800/30 hover:border-black/60 hover:scale-105 shadow-lg shadow-black/20'
                      : 'hover:bg-white/5'
                  }`}
                >
                                                        {button.label === 'Deployed' && (
                     <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                   )}
                  {button.label}
                </a>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default NewNavbar;
