import { motion } from 'framer-motion';
import { ExternalLink, Globe, Github, Play } from 'lucide-react';

const Deployed = () => {
  const deployedProjects = [
    {
      title: 'Cancer Cure Q&A System',
      description: 'Built a Flask web app with a custom-trained ML model (.pkl) for cancer-treatment Q&A.',
      technologies: ['Flask', 'Machine Learning', 'Python', 'ML Model (.pkl)'],
      liveUrl: 'https://cure-cancer-4.onrender.com',
      githubUrl: '',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070',
      category: 'Healthcare AI'
    },
    {
      title: 'Movie Recommender',
      description: 'Developed a content-based recommendation system using cosine similarity, Scikit-learn, KNN algorithm, NumPy, and Pandas.',
      technologies: ['Machine Learning', 'Scikit-learn', 'Python', 'Recommendation System'],
      liveUrl: 'https://abhisek-raj-movies-recommender-app-y8xzqr.streamlit.app/',
      githubUrl: 'https://github.com/abhisek-raj/movies_recommender.git',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2069',
      category: 'ML Application'
    },
    {
      title: 'Interview Preparation Website',
      description: 'Full-stack platform using React, Node.js, MongoDB. Features: play with friend in realtime, no cheating environment exams like smart hire, give quiz on topic. Used cloud server database for fetching data and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Full-Stack', 'Real-time'],
      liveUrl: 'https://6899de6a613dbf9c671defe6--leadthebrain.netlify.app',
      githubUrl: 'https://github.com/abhisek-raj/labbased_project.git',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
      category: 'Full-Stack Web App'
    },
    {
      title: 'Bajaj Policy & Insurance System',
      description: 'Developed app for managing insurance policies, claims, and easy to customers for searching and finding available policy.',
      technologies: ['Streamlit', 'Python', 'Insurance Management', 'Policy System'],
      liveUrl: 'https://bajajpolicy-amunbzvunowjmdcnmddr53.streamlit.app/',
      githubUrl: 'https://github.com/abhisek-raj/bajaj-policy',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070',
      category: 'Business Application'
    },
    {
      title: 'Web Scraping & Data Extraction',
      description: 'Python-based scraper using BeautifulSoup, Requests, Pandas with automated cleaning and analysis.',
      technologies: ['Python', 'BeautifulSoup', 'Web Scraping', 'Data Analysis'],
      liveUrl: 'https://webscraping-bot-aq79stmauadajuy5vx822k.streamlit.app/',
      githubUrl: 'https://github.com/abhisek-raj/web-scraping-project',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      category: 'Data Tool'
    }
  ];

  return (
    <section id="deployed" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Live Deployed Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore my projects that are live and accessible online, showcasing real-world applications of AI/ML and web development
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Deployed Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {deployedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full font-medium">
                    Live
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary inline-flex items-center justify-center gap-2 text-sm hover:scale-105 transition-transform duration-200"
                >
                  <Play className="h-4 w-4" />
                  Live Demo
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Deploy Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate on building and deploying cutting-edge applications that make a real impact.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Started
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Deployed;
