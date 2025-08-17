
import { motion } from 'framer-motion';
import ScrollReveal from './ui/scroll-reveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 text-center">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

      </motion.div>
    </footer>
  );
};

export default Footer;
