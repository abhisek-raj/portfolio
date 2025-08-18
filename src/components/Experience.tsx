import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Github } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Artificial Intelligence Machine Learning Intern-3months',
      company: 'Finessefleet Foundation',
      period: 'June 2025 -- August 2025',
      achievements: [
        'Developed a Python-based Streamlit website',
        'Trained models for code-mixed Indian languages in LinguaBridge using CNN-LSTM',
        'Developed translation pipelines using IndicNLP and conducted data curation'
      ],
      projectLink: 'https://github.com/finessefleet/linguabridge/tree/Abhisek',
      companyLink: 'https://www.linkedin.com/company/finessefleet/'
     
    },
    {
      title: 'AI/ML Intern',
      company: 'Central Tool Room & Training Centre (MSME)',
      department: '',
      period: 'July 2024 -- August 2024',
      achievements: [
        'Trained in Python, Machine Learning, NLP, and Computer Vision.',
        'Developed face recognition and attendance systems and created machine learning models.',
        'train and testing of models',
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Entries */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="font-medium">
                      {exp.companyLink ? (
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors duration-200 underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </span>
                  </div>
                  {exp.department && (
                    <span className="text-sm opacity-80">
                      {exp.department}
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <motion.li
                    key={achievementIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/90 leading-relaxed">
                      {achievement.includes('Project Link:') ? (
                        <span>
                          <span className="font-medium">Project Link:</span>{' '}
                          <a
                            href={exp.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-2 inline-flex"
                          >
                            <span className="underline">{exp.projectLink}</span>
                            <ExternalLink size={16} />
                          </a>
                        </span>
                      ) : (
                        achievement
                      )}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Project Link Button */}
              {exp.projectLink && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6"
                >
                  <a
                    href={exp.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github size={16} />
                    View Project
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
