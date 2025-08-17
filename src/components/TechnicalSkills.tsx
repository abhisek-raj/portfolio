import { motion } from 'framer-motion';
import { Code, Database, Brain, Cpu, Zap, Globe, Server, Cloud } from 'lucide-react';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: [
        'Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'R', 'Julia'
      ],
      description: 'Core programming languages for development and data science'
    },
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="h-8 w-8 text-primary" />,
      skills: [
        'TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'
      ],
      description: 'Advanced ML frameworks and data manipulation libraries'
    },
    {
      title: 'Natural Language Processing',
      icon: <Cpu className="h-8 w-8 text-primary" />,
      skills: [
        'NLTK', 'spaCy', 'Transformers', 'Hugging Face', 'BERT', 'GPT', 'Word2Vec', 'GloVe', 'SpaCy'
      ],
      description: 'NLP libraries and pre-trained models for text processing'
    },
    {
      title: 'Web Development',
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: [
        'React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Django', 'HTML5', 'CSS3', 'Tailwind CSS'
      ],
      description: 'Full-stack development frameworks and technologies'
    },
    {
      title: 'Databases & Cloud',
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: [
        'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'
      ],
      description: 'Database systems and cloud infrastructure'
    },
    {
      title: 'Development Tools',
      icon: <Zap className="h-8 w-8 text-primary" />,
      skills: [
        'VS Code', 'PyCharm', 'Jupyter Notebook', 'Google Colab', 'Git', 'GitHub', 'Postman', 'Docker Desktop'
      ],
      description: 'Essential tools for development and collaboration'
    },
    {
      title: 'Data Analysis & Visualization',
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: [
        'Power BI', 'Tableau', 'Plotly', 'Bokeh', 'Jupyter', 'Anaconda', 'Apache Spark', 'Hadoop'
      ],
      description: 'Data visualization and big data processing tools'
    },
    {
      title: 'Additional ML/NLP Tools',
      icon: <Cloud className="h-8 w-8 text-primary" />,
      skills: [
        'Weights & Biases', 'MLflow', 'Kubeflow', 'FastAPI', 'Streamlit', 'Gradio', 'LangChain', 'ChromaDB'
      ],
      description: 'Advanced tools for ML model management and deployment'
    }
  ];

  const proficiencyLevels = [
    { level: 'Expert', color: 'bg-green-500/20 text-green-400', skills: ['Python', 'TensorFlow', 'PyTorch', 'Git'] },
    { level: 'Advanced', color: 'bg-blue-500/20 text-blue-400', skills: ['JavaScript', 'React', 'MongoDB', 'Scikit-Learn'] },
    { level: 'Intermediate', color: 'bg-yellow-500/20 text-yellow-400', skills: ['Java', 'Node.js', 'Docker', 'Power BI'] },
    { level: 'Learning', color: 'bg-purple-500/20 text-purple-400', skills: ['Kubernetes', 'LangChain', 'FastAPI'] }
  ];

  return (
    <section id="technical-skills" className="py-20 relative">
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
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive technical expertise spanning machine learning, NLP, web development, and data science
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Skill Proficiency Levels
          </h3>
          
          <div className="space-y-6">
            {proficiencyLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${level.color}`}>
                    {level.level}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {level.skills.length} skills
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {level.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-2 py-1 text-xs bg-background/50 text-foreground rounded border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Continuously Learning & Growing
            </h3>
            <p className="text-muted-foreground mb-6">
              Always exploring new technologies and frameworks to stay at the forefront of AI/ML development
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                MLOps
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                AutoML
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                Edge AI
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                Federated Learning
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
