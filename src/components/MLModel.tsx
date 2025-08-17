import { motion } from 'framer-motion';
import { Brain, Code, Database, TrendingUp, Zap, Target } from 'lucide-react';

const MLModel = () => {
  const mlModels = [
    {
      title: 'Cancer Data Text Classification Model',
      description: 'NLP-based model trained on cancer-related text data for classification tasks. Exported as a .pkl file for deployment and integration in real-world apps.',
      features: ['Text Classification', 'Cancer Data Analysis', 'NLP Processing', 'Model Export (.pkl)'],
      technologies: ['NLP', 'Machine Learning', 'Text Classification', 'Python'],
      status: 'Production Ready',
      icon: <Brain className="h-8 w-8 text-primary" />,
      modelLink: 'https://drive.google.com/file/d/13fUexj1emv1lrSA1GcPz0JAiSfGBfwVj/view?usp=sharing'
    },
    {
      title: 'Indian Sign Language (ISL) Numeric Recognition Model',
      description: 'Deep learning CNN model for recognizing numeric hand gestures in Indian Sign Language. Trained and exported in .h5 format for real-time prediction.',
      features: ['Hand Gesture Recognition', 'CNN Architecture', 'Real-time Prediction', 'Model Export (.h5)'],
      technologies: ['Deep Learning', 'CNN', 'Computer Vision', 'TensorFlow/Keras'],
      status: 'Production Ready',
      icon: <Target className="h-8 w-8 text-primary" />,
      modelLink: 'https://drive.google.com/file/d/13fUexj1emv1lrSA1GcPz0JAiSfGBfwVj/view?usp=sharing'
    }
  ];

  return (
    <section id="ml-model" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Machine Learning Models
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Specialized ML models for text classification and computer vision applications.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mlModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {model.icon}
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {model.title}
                    </h3>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      model.status === 'Production Ready' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {model.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {model.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {model.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Model Download Link */}
              {model.modelLink && (
                <a
                  href={model.modelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                >
                  <span>📁</span>
                  <span>View Model File</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MLModel;
