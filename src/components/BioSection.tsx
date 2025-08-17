import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Timeline, TimelineEntry } from './ui/timeline';
import { InfiniteSlider } from './ui/infinite-slider';
import ScrollReveal from './ui/scroll-reveal';

const BioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.1 });
  const controls = useAnimation();
  const skillsControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (isSkillsInView) {
      skillsControls.start('visible');
    }
  }, [isSkillsInView, skillsControls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  // Timeline data with all the content (wrapped in ScrollReveal)
  const timelineItems: TimelineEntry[] = [
    {
      title: "2018",
      content: (
        <div className="p-6 transition-all duration-300">
          <ScrollReveal 
            baseOpacity={0} 
            enableBlur={true} 
            baseRotation={2} 
            blurStrength={4}
            textClassName="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed"
          >
            Started my academic journey at <strong>DAV Public School, Urjanagar</strong>, where I built strong fundamentals and achieved <strong>71%</strong> in Matriculation.
          </ScrollReveal>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="p-6 transition-all duration-300">
          <ScrollReveal 
            baseOpacity={0} 
            enableBlur={true} 
            baseRotation={2} 
            blurStrength={4}
            textClassName="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed"
          >
            Pursued <strong>Intermediate studies at Zila School (+2), Bhagalpur</strong> with a focus on Science and Mathematics, scoring <strong>69%</strong>.
          </ScrollReveal>
        </div>
      ),
    },
    {
      title: "2022-2026",
      content: (
        <div className="p-6 transition-all duration-300">
          <ScrollReveal 
            baseOpacity={0} 
            enableBlur={true} 
            baseRotation={2} 
            blurStrength={4}
            textClassName="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed"
          >
            Joined <strong>NIST University</strong> to pursue B.Tech in <strong>Computer Science and Engineering</strong>, where I explored my interest in Artificial Intelligence and Data Science.
          </ScrollReveal>
        </div>
      ),
    },
    {
      title: "College Projects",
      content: (
        <div className="p-6 transition-all duration-300">
          <ScrollReveal 
            baseOpacity={0} 
            enableBlur={true} 
            baseRotation={2} 
            blurStrength={4}
            textClassName="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed"
          >
            During college, I started building projects like <strong>Movie Recommender, ISL Translator, and Cancer Cure Q&A Bot</strong>, which gave me hands-on experience in ML, Web Development, and Data Analysis.
          </ScrollReveal>
        </div>
      ),
    },
    {
      title: "Hackathons",
      content: (
        <div className="p-6 transition-all duration-300">
          <ScrollReveal 
            baseOpacity={0} 
            enableBlur={true} 
            baseRotation={2} 
            blurStrength={4}
            textClassName="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed"
          >
            Actively participated in hackathons such as <strong>StarkSeek Hackathon (Finalist)</strong> and <strong>CodeSpark Build Challenge (Runner-up)</strong>, showcasing teamwork and problem-solving skills.
          </ScrollReveal>
        </div>
      ),
    },
    {
      title: "Internships",
      content: (
        <div className="p-6 transition-all duration-300">
          <ScrollReveal 
            baseOpacity={0} 
            enableBlur={true} 
            baseRotation={2} 
            blurStrength={4}
            textClassName="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed"
          >
            Completed internships:
          </ScrollReveal>
          <div className="space-y-3 mb-4">
            <ScrollReveal 
              baseOpacity={0} 
              enableBlur={true} 
              baseRotation={1} 
              blurStrength={3}
              textClassName="flex items-start text-foreground text-sm leading-relaxed border-l-3 border-primary/60 pl-4 py-1"
              delay={0.1}
            >
              <strong>AI/ML Intern at MSME (July 2024 -- Aug 2024)</strong> where I developed a Face Recognition and Attendance System.
            </ScrollReveal>
            <ScrollReveal 
              baseOpacity={0} 
              enableBlur={true} 
              baseRotation={1} 
              blurStrength={3}
              textClassName="flex items-start text-foreground text-sm leading-relaxed border-l-3 border-primary/60 pl-4 py-1"
              delay={0.2}
            >
              <strong>Machine Learning Research Intern at Finessefleet Foundation (June 2025 -- Aug 2025)</strong> where I worked on <strong>LinguaBridge</strong>, a multilingual translation project.
            </ScrollReveal>
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div className="p-6 transition-all duration-300">
          <ScrollReveal 
            baseOpacity={0} 
            enableBlur={true} 
            baseRotation={2} 
            blurStrength={4}
            textClassName="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed"
          >
            Currently growing as a Machine Learning Engineer aspirant, with strong interest in <strong>AI, NLP, and Data Analytics</strong>, aiming to contribute impactful solutions in real-world applications.
          </ScrollReveal>
        </div>
      ),
    },
  ];

  return (
    <section id="bio" ref={sectionRef} className="scroll-section pt-16 pb-16 relative overflow-visible">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={variants}
          initial="hidden"
          animate={controls}
          custom={0}
          className="mb-12 max-w-3xl mx-auto text-center"
        >
          {/* Section header with ScrollReveal */}
          <ScrollReveal
            className="mb-6"
            textClassName="text-3xl md:text-5xl font-bold"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={3}
            blurStrength={5}
          >
            <span className="text-gradient">My Journey</span>
          </ScrollReveal>
          
          <ScrollReveal
            textClassName="text-muted-foreground text-sm md:text-base max-w-3xl"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
            blurStrength={4}
            delay={0.3}
          >
            Results-driven professional with a strong foundation in <strong>Artificial Intelligence, Machine Learning</strong>, and <strong>Data Analysis</strong>. Skilled in executing end-to-end projects—from data collection and preprocessing to model development, deployment, and web integration.
          </ScrollReveal>
        </motion.div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <Timeline data={timelineItems} />
        </div>
        
        <div ref={skillsRef} className="mt-16 mb-0 min-h-[150px]">
          <motion.div
            variants={variants}
            initial="visible"
            animate="visible"
            custom={1}
            className="w-full"
          >
            <div className="w-full h-[150px]">
              <InfiniteSlider gap={50} duration={35} className="w-full">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://www.svgrepo.com/download/374118/tailwind.svg"
                  alt="Tailwind CSS logo"
                  className="h-[70px] w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";
                  }}
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="Figma logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5 logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3 logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="Redux logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                  alt="TensorFlow logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                  alt="PyTorch logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
                  alt="Jupyter logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg"
                  alt="AWS logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                  alt="Kubernetes logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  alt="PostgreSQL logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                  alt="Redis logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
                  alt="Nginx logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                  alt="VS Code logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
                  alt="IntelliJ logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"
                  alt="PyCharm logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg"
                  alt="Atom logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sublime/sublime-original.svg"
                  alt="Sublime Text logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg"
                  alt="Vim logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/emacs/emacs-original.svg"
                  alt="Emacs logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notepadplusplus/notepadplusplus-original.svg"
                  alt="Notepad++ logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/brackets/brackets-original.svg"
                  alt="Brackets logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg"
                  alt="WebStorm logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg"
                  alt="PhpStorm logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rubymine/rubymine-original.svg"
                  alt="RubyMine logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clion/clion-original.svg"
                  alt="CLion logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/idea/idea-original.svg"
                  alt="IntelliJ IDEA logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg"
                  alt="Eclipse logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netbeans/netbeans-original.svg"
                  alt="NetBeans logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                  alt="Visual Studio logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"
                  alt="Xcode logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
                  alt="Android Studio logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  alt="Flutter logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://www.svgrepo.com/download/374118/tailwind.svg"
                  alt="Tailwind CSS logo"
                  className="h-[70px] w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";
                  }}
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="Figma logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5 logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3 logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="Redux logo"
                  className="h-[70px] w-auto object-contain"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js logo"
                  className="h-[70px] w-auto object-contain"
                />
              </InfiniteSlider>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
