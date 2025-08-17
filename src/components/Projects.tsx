import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "@/hooks/use-toast";
import ScrollReveal from './ui/scroll-reveal';
import VariableProximity from './VariableProximity';

const projects = [
  {
    id: 1,
    title: 'Lingua Bridge Application',
    description: 'Implemented multilingual translation for 22+ Indian languages and 5+ code-mixed languages, with integrated sentiment analysis using NLP techniques.',
    tags: ['NLP', 'Machine Learning', 'Translation', 'Sentiment Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
    liveUrl: '',
    githubUrl: 'https://github.com/finessefleet/linguabridge/tree/Abhisek'
  },
  {
    id: 2,
    title: 'Cancer Chatbot',
    description: 'Chatbot for cancer patients using Dataset, Hugging Face LLMs with vector databases for contextual memory.',
    tags: ['AI/ML', 'Chatbot', 'Hugging Face', 'Vector Database'],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070',
    liveUrl: '',
    githubUrl: 'https://github.com/abhisek-raj/project-ai-medical-bot.git'
  },
  {
    id: 3,
    title: 'Movie Recommender',
    description: 'Developed a content-based recommendation system using cosine similarity, Scikit-learn, NumPy, and Pandas.',
    tags: ['Machine Learning', 'Recommendation System', 'Python', 'Scikit-learn'],
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2069',
    liveUrl: '',
    githubUrl: 'https://github.com/abhisek-raj/movies_recommender.git'
  },
  {
    id: 4,
    title: 'Customer Segmentation',
    description: 'Performed customer segmentation using K-Means clustering with Matplotlib and Seaborn for visualization.',
    tags: ['Data Science', 'Clustering', 'K-Means', 'Visualization'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
    liveUrl: '',
    githubUrl: 'https://github.com/abhisek-raj/cluster-customer-viz.git'
  },
  {
    id: 5,
    title: 'ISL (Indian Sign Language Translator)',
    description: 'Built a real-time gesture recognizer using OpenCV and computer vision to assist users with hearing and speech impairments.',
    tags: ['Computer Vision', 'OpenCV', 'Real-time', 'Accessibility'],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070',
    liveUrl: '',
    githubUrl: ''
  },
  {
    id: 6,
    title: 'Interview Preparation Website',
    description: 'Built a full-stack interview preparation platform using React, Node.js, MongoDB, and Gemini API for dynamic quiz generation.',
    tags: ['Full-Stack', 'React', 'Node.js', 'MongoDB', 'Gemini API'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
    liveUrl: '',
    githubUrl: 'https://github.com/abhisek-raj/labbased_project.git'
  },
  {
    id: 7,
    title: 'Bajaj Policy and Insurance Management System',
    description: 'Developed an application for managing insurance policies, claims, and customer data with efficient storage and retrieval. Implemented features such as policy tracking, premium calculation, and secure user authentication.',
    tags: ['Full-Stack', 'Insurance', 'Policy Management', 'Authentication'],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070',
    liveUrl: 'https://bajaj-policy-insurance.vercel.app',
    githubUrl: 'https://github.com/abhisek-raj/bajaj-policy'
  },
  {
    id: 8,
    title: 'Web Scraping and Data Extraction Project',
    description: 'Built a Python-based web scraper using BeautifulSoup, Requests, and Pandas for structured data extraction. Automated cleaning and analysis of scraped data for use in NLP and analytics pipelines.',
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Data Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
    liveUrl: 'https://web-scraping-demo.vercel.app',
    githubUrl: 'https://github.com/abhisek-raj/web-scraping-project'
  }
];

const Projects = () => {
  const [user, setUser] = useState(null);
  const [likedProjects, setLikedProjects] = useState<number[]>([]);
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if user is authenticated
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    // Fetch like counts for all projects
    const fetchLikeCounts = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('project_likes')
          .select('project_id, count')
          .select('project_id')

        if (error) {
          console.error('Error fetching like counts:', error);
          return;
        }

        // Calculate like counts for each project
        const counts: Record<number, number> = {};
        projects.forEach(project => {
          counts[project.id] = data.filter(like => like.project_id === project.id).length;
        });
        setLikeCounts(counts);
      } catch (error) {
        console.error('Error in fetching like counts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch which projects the current user has liked
    const fetchUserLikes = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data, error } = await supabase
          .from('project_likes')
          .select('project_id')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching user likes:', error);
          return;
        }

        // Set the projects the user has liked
        setLikedProjects(data.map(like => like.project_id));
      }
    };

    checkUser();
    fetchLikeCounts();
    fetchUserLikes();

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        await fetchUserLikes();
      } else {
        setLikedProjects([]);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLike = async (projectId: number) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to like projects",
        variant: "destructive"
      });
      return;
    }

    const isLiked = likedProjects.includes(projectId);

    try {
      if (isLiked) {
        // Unlike the project
        const { error } = await supabase
          .from('project_likes')
          .delete()
          .eq('project_id', projectId)
          .eq('user_id', user.id);

        if (error) throw error;

        // Update local state
        setLikedProjects(prev => prev.filter(id => id !== projectId));
        setLikeCounts(prev => ({
          ...prev,
          [projectId]: (prev[projectId] || 0) - 1
        }));

        toast({
          title: "Project unliked",
          description: "You've removed your like from this project"
        });
      } else {
        // Like the project
        const { error } = await supabase
          .from('project_likes')
          .insert({ project_id: projectId, user_id: user.id });

        if (error) throw error;

        // Update local state
        setLikedProjects(prev => [...prev, projectId]);
        setLikeCounts(prev => ({
          ...prev,
          [projectId]: (prev[projectId] || 0) + 1
        }));

        toast({
          title: "Project liked",
          description: "Thanks for liking this project!"
        });
      }
    } catch (error) {
      console.error('Error toggling like:', error);
      toast({
        title: "Error",
        description: "There was a problem processing your request",
        variant: "destructive"
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.5
          }} 
          viewport={{
            once: true
          }}
        >
          <div className="mb-3 md:mb-4">
            <VariableProximity 
              label="My Projects"
              fromFontVariationSettings="'wght' 400, 'opsz' 9" 
              toFontVariationSettings="'wght' 800, 'opsz' 40" 
              containerRef={containerRef} 
              radius={150} 
              falloff="exponential" 
              className="variable-proximity-title playfair-display text-2xl sm:text-3xl md:text-4xl font-bold" 
            />
          </div>
          
          <ScrollReveal
            textClassName="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={1}
            blurStrength={3}
            delay={0.2}
          >
            Here are some of my AI/ML, Data Science, and Full-Stack projects. Click on the links to explore the code on GitHub or view live demos where available.
          </ScrollReveal>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{
                opacity: 0,
                y: 20
              }} 
              whileInView={{
                opacity: 1,
                y: 0
              }} 
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }} 
              viewport={{
                once: true
              }} 
              className="bg-black/5 backdrop-blur-sm rounded-lg overflow-hidden group h-full flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <ScrollReveal
                    textClassName="text-lg sm:text-xl font-semibold"
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={2}
                    blurStrength={4}
                    delay={index * 0.1}
                  >
                    {project.title}
                  </ScrollReveal>
                  <button
                    onClick={() => handleLike(project.id)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    aria-label={likedProjects.includes(project.id) ? "Unlike project" : "Like project"}
                  >
                    <Heart
                      className={`h-4 w-4 ${likedProjects.includes(project.id) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                    <span>{isLoading ? '...' : likeCounts[project.id] || 0}</span>
                  </button>
                </div>
                <ScrollReveal
                  className="mb-4 flex-grow"
                  textClassName="text-sm text-muted-foreground"
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={1}
                  blurStrength={3}
                  delay={index * 0.1 + 0.1}
                >
                  {project.description}
                </ScrollReveal>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-primary/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary inline-flex items-center text-sm font-medium"
                    >
                      Live Demo <ChevronRight className="ml-1 h-3 w-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary inline-flex items-center text-sm font-medium"
                    >
                      GitHub <ChevronRight className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.5,
            delay: 0.3
          }} 
          viewport={{
            once: true
          }} 
          className="text-center mt-10 md:mt-16"
        >
          <Button size="lg" className="px-6 sm:px-8" onClick={scrollToContact}>
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
