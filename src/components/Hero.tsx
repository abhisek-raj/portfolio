
import { useRef } from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity';
import ScrollReveal from './ui/scroll-reveal';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="hero" className="scroll-section flex items-center justify-center relative overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-6 md:py-20 flex flex-col items-center text-center min-h-screen justify-center my-[24px] py-[49px]">
        <motion.div 
          className="stagger-animation flex flex-col items-center max-w-4xl" 
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient playfair-display-bold" 
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
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base text-muted-foreground mb-4">
              <a 
                href="tel:+918797456277" 
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <span>📞</span>
                <span className="underline">+91-6203296773</span>
              </a>
              <span className="hidden md:inline">|</span>
              <a 
                href="mailto:tiwary.abhisek.raj@gmail.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <span>✉️</span>
                <span className="underline">tiwary.abhisek.raj@gmail.com</span>
              </a>
            </div>
            <div className="text-sm md:text-base text-muted-foreground mb-4">
              Godda, Jharkhand, India
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base text-muted-foreground">
              <a 
                href="https://www.linkedin.com/in/abhisek-raj-7b538a321/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <span>💼</span>
                <span className="underline">linkedin.com/in/abhisek-raj-7b538a321</span>
              </a>
              <span className="hidden md:inline">|</span>
              <a 
                href="https://github.com/abhisek-raj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <span>🐙</span>
                <span className="underline">github.com/abhisek-raj</span>
              </a>
            </div>
          </motion.div>
          
          <ScrollReveal 
            className="w-full"
            textClassName="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 playfair-display-medium"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
            blurStrength={5}
            delay={0.5}
          >
            Results-driven professional with a strong foundation in Artificial Intelligence, Machine Learning, and Data Analysis
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
