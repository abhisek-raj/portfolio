
import { useRef } from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity';
import ScrollReveal from './ui/scroll-reveal';

// Resume file path
const RESUME_PATH = '/resume/resume (10).pdf';
const RESUME_FILENAME = 'AbhisekRaj_Resume.pdf';

const handleResumeDownload = () => {
  try {
    // Create a temporary anchor tag
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading resume:', error);
    // Fallback to opening in new tab
    window.open(RESUME_PATH, '_blank');
  }
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="hero" className="scroll-section flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:py-20 flex flex-col items-center min-h-screen justify-center my-[24px] py-[49px]">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Left Column - Image */}
            <motion.div 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img 
                  src="/images/profile.jpg" 
                  alt="Abhisek Raj" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Right Column - Text Content */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <motion.div 
                className="stagger-animation"
                initial="hidden" 
                animate="visible" 
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                  }
                }}
              >
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient playfair-display-bold" 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                >
                  <VariableProximity 
                    label="ABHISEK RAJ" 
                    fromFontVariationSettings="'wght' 400, 'opsz' 9" 
                    toFontVariationSettings="'wght' 800, 'opsz' 40" 
                    containerRef={containerRef} 
                    radius={150} 
                    falloff="exponential" 
                    className="variable-proximity-title playfair-display" 
                  />
                </motion.h1>
                
                <motion.div 
                  className="space-y-4 text-muted-foreground text-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2 }
                    }
                  }}
                >
                  <p className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                    <span>📞 +91-6203296773</span>
                    <span className="hidden md:inline">|</span>
                    <span>✉️ tiwary.abhisek.raj@gmail.com</span>
                  </p>
                  <p>📍 Godda, Jharkhand, India</p>
                  <p className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                    <a href="https://linkedin.com/in/abhisek-raj-7b538a321" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                      💼 linkedin.com/in/abhisek-raj-7b538a321
                    </a>
                    <span className="hidden md:inline">|</span>
                    <a href="https://github.com/abhisek-raj" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                      🐙 github.com/abhisek-raj
                    </a>
                  </p>
                  <div className="pt-4 space-y-4">
                    <p className="text-foreground text-lg">
                      Results-driven professional with a strong foundation in Artificial Intelligence, Machine Learning, and Data Analysis
                    </p>
                    <motion.button
                      onClick={handleResumeDownload}
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl w-full sm:w-auto"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Resume
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <ScrollReveal
          className="w-full mt-12"
          textClassName="text-2xl md:text-3xl lg:text-4xl font-bold text-center playfair-display-medium"
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={5}
          delay={0.5} children={''}          
        >
       
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
