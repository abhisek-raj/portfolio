import { motion } from 'framer-motion';
import { Code, Database, Brain, Cpu, Zap, Globe, Server, Cloud, BarChart2 } from 'lucide-react';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: [
        
        { name: 'PYTHON', level: 75 },
        { name: 'Streamlit', level: 75 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        
        { name: 'Node.js', level: 75 },
        
      ]
    },
    {
      title: 'Programming',
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java with DSA', level: 85 },
        { name: 'Java', level: 70 },
        
      ]
    },
    {
      title: 'Machine Learning',
      icon: <Brain className="h-6 w-6 text-primary" />,
      skills: [
        { name: 'NLP', level: 85 },
        { name: 'Computer Vision', level: 85 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-Learn', level: 85 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 90 },
        { name: 'keras', level: 90 },

      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
  
        { name: 'GitLab CI/CD', level: 80 },
       
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 80 },
       
      ]
    },
    {
      title: 'Data Analyst',
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Power BI', level: 80 },
        
        { name: 'Excel', level: 90 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Data Cleaning', level: 90 },
        { name: 'Statistical Analysis', level: 80 },
        { name: 'Google Analytics', level: 75 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Zap className="h-6 w-6 text-primary" />,
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'GitLab', level: 85 },
        { name: 'Hugging Face', level: 85 },
        { name: 'Google Colab', level: 90 },
        { name: 'Anaconda', level: 85 },
        { name: 'Jupyter', level: 85 },
        { name: 'Docker', level: 85 }
      ]
    }
  ];

  return (
    <section id="technical-skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Here are the technologies I work with
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-md bg-muted text-foreground border border-border hover:bg-primary/10 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
